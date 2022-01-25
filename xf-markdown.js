const CSS_PATH = '/styles/markdown.css';
const PRISM_PATH = '/js/prism.js';
let loc = location.href;
let css = document.createElement('link');
css.rel = 'stylesheet';
css.type = 'text/css';
css.href = CSS_PATH;
document.head.appendChild(css);

/**
 *
 * @param {string} str 输入文本
 * @param {string} lang 语言
 * @returns 高亮处理后的 HTML 纯文本
 */
function highlightAs(str, lang) {
	return Prism.highlight(str, Prism.languages[lang], lang);
}

/**
 *
 * @param {string} from 输入文本
 * @param {boolean} outer 是否针对外部
 * @returns 移除后的文本
 *
 * 移除不允许的 HTML 标签（黑名单模式）。针对外部的移除会更加宽松，保证外部格式正常显示。
 */
function removeBannedHTML(from, outer = false) {
	let reg = outer
		? /<\/?(acronym|address|applet|area|article|aside|base|basefont|bdi|bdo|bgsound|big|blink|canvas|caption|cite|col|colgroup|data|datalist|details|dfn|dir|fieldset|figcaption|figure|font|frame|frameset|head|header|footer|hgroup|html|iframe|input|ins|isindex|keygen|label|legend|link|listing|main|map|mark|marquee|menu|menuitem|meta|meter|nav|nobr|noframes|noscript|object|optgroup|option|output|param|plaintext|progress|rp|rt|ruby|s|samp|script|select|source|spacer|style|summary|textarea|time|title|track|var|video|audio|wbr|xmp)\b[^<>]*>/g
		: /<\/?(abbr|acronym|address|applet|area|article|aside|audio|base|basefont|bdi|bdo|bgsound|big|blink|body|button|canvas|caption|cite|col|colgroup|data|datalist|dd|details|dfn|dir|div|dl|dt|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|head|header|hgroup|html|iframe|input|ins|isindex|keygen|label|legend|link|listing|main|map|mark|marquee|menu|menuitem|meta|meter|nav|nobr|noframes|noscript|object|optgroup|option|output|param|plaintext|progress|q|rp|rt|ruby|s|samp|script|section|select|source|spacer|style|summary|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|var|video|wbr|xmp)\b[^<>]*>/g;
	return from.replace(reg, '&lt;$1&gt;');
}

/**
 *
 * @param {string} from 输入文本
 * @returns 处理后内容
 *
 * 移除输入文本的开头空行
 */
function removeFirstReturn(from) {
	return from.replace('\n', '');
}

/**
 *
 * @param {string} rawHtml 原 HTML 完整内容
 * @param {string} rawText 原纯文本完整内容
 * @returns 解析后的 HTML 纯文本
 */
function getMarkdownResult(rawHtml, rawText) {
	let result = [];
	let k, l, e, f;
	// 将原 HTML 根据 [MD] 分成若干部分
	let sp = rawHtml.split('[MD]');
	// 将原纯文本根据 [MD] 分成若干部分
	let spT = rawText.split('[MD]');
	// 对任意以 [MD] 开头的部分进行操作
	for (let i = 0; i < sp.length; i++) {
		// 将原 HTML 中被转义的字符恢复
		e = removeBannedHTML(recoverHTMLChars(sp[i]), true);
		// 将原文本中被转义的字符恢复，然后过滤黑名单中的 HTML 标签
		f = removeBannedHTML(recoverHTMLChars(spT[i]));
		// 如果当前部分不含有结束符，则代表当前部分之内的内容均为正文内容
		// 于是将当前部分内容转义后加入 result 中
		if (!e.includes('[/MD]')) {
			result.push(recoverMD(removeFirstReturn(e)));
			continue;
		}
		// 如果当前部分含有结束符，则将当前部分从结束符处分为上部分和下部分
		// k 为 HTML 纯文本，l 为纯文本
		k = e.split('[/MD]');
		l = f.split('[/MD]');
		// 将纯文本的上部分进行解析后加入 result
		result.push(window.MARKDOWN.makeHtml(recoverMD(l[0])));
		// 将 HTML 的下部分（即非 [MD][/MD] 之间的部分）直接加入 result
		result.push(removeFirstReturn(recoverMD(k[1])));
	}
	return result;
}

/**
 *
 * @param {string} raw 输入文本
 * @returns 转义后内容
 *
 * 将 \[MD\]、\[/MD\] 写法转义为正常的 [MD]、[/MD] 纯文本字符串
 */
function recoverMD(raw) {
	return raw.replace(/\\\[MD\\\]/g, '[MD]').replace(/\\\[\/MD\\\]/g, '[/MD]');
}

/**
 *
 * @param {string} raw 输入文本
 * @returns 转义后内容
 *
 * 将 `&gt;` 和 `&lt;` 转义为正常的 `<` 和 `>` 字符
 */
function recoverHTMLChars(raw) {
	return raw.replace(/&gt;/g, '>').replace(/&lt;/g, '<');
}

/**
 *
 * @param {JQuery} jqObject Markdown 文本所在元素的 JQuery 对象
 *
 * 将指定元素的纯文本内容替换为转义后的 HTML 同时并入文档。
 */
function md(jqObject) {
	let content = jqObject;
	let html, result, text;
	content.each((i, e) => {
		e = $(e);
		html = e.html();
		text = e.text();
		result = getMarkdownResult(html, text).join('');
		if (result.trim().length > 0) {
			e.html(result);
		} else {
			console.warn('markdown error.');
		}
	});
}

/**
 *
 * @param {string} url POST 地址
 * @param {any} data POST 内容
 * @returns JQuery Ajax 对象
 *
 * 进行 POST 请求
 */
function post(url, data) {
	return $.ajax({
		method: 'POST',
		url,
		data
	});
}

function main() {
	window.MARKDOWN = new showdown.Converter({
		extensions: [
			{
				type: 'output',
				filter: (text, converter) => {
					let gen = text.matchAll(/(<pre><code class=".*?language-(\w+).*?">((.|\n)*?)<\/code><\/pre>)/g);
					let i = 0;
					let lang, content;

					for (let e of gen) {
						if (i === 0 && e === undefined) {
							return text;
						}
						if (e === undefined) break;
						[lang, content] = [e[2], e[3]];
						try {
							text = text.replaceAll(
								e[0],
								'<div class="bbCodeBlock bbCodeBlock--screenLimited bbCodeBlock--code"><div class="bbCodeBlock-title">' +
									lang +
									':</div><div class="bbCodeBlock-content"><pre class="bbCodeCode line-numbers language-' +
									lang +
									'"><code class="language-' +
									lang +
									'">' +
									highlightAs(recoverHTMLChars(content), lang) +
									'</code></pre></div></div>'
							);
						} catch (e) {
							return text;
						}
					}
					return text;
				}
			}
		]
	});
	window.MARKDOWN.setFlavor('github');

	$(document).ready(() => {
		if (loc.includes('threads/')) {
			md($('article.message-body .bbWrapper'));
		}

		if (loc.includes('pages/how-2-ask')) {
			md($('.p-body-pageContent .block-body.block-row'));
		}

		if (loc.includes('resources/')) {
			md($('.resourceBody .bbWrapper'));
		}

		if (loc.includes('post-thread') || loc.includes('threads/') || loc.includes('/edit')) {
			post('/css.php', {
				css: 'public:bb_code.less',
				s: '51',
				l: '2'
			}).done(a => {
				let style = document.createElement('style');
				style.innerText = a;
				style.setAttribute('xf-markdown', null);
				document.head.appendChild(style);
			});
			let styleObserver = new MutationObserver(mutations => {
				mutations.forEach(r => {
					if (r.target.style.display === '') {
						md($('.xfPreview .bbWrapper'));
					}
				});
			});
			let observer = new MutationObserver(mutations => {
				mutations.forEach(mutation => {
					if (loc.includes('threads/')) {
						if (mutation.target) {
							let className = mutation.target.getAttribute('class');
							if (className === null) return;
							if (className.includes('message-cell message-cell--main is-editing')) {
								let el = $(mutation.target.querySelector('article.message-body .bbWrapper'));
								if (el.text().includes('[MD]') && el.text().includes('[/MD]')) {
									md(el);
								}
							}
						}
					}
					if (mutation.addedNodes.length === 0) return;
					let e;
					for (let i = 0; i < mutation.addedNodes.length; i++) {
						e = mutation.addedNodes[i];
						if (e.getAttribute) {
							let className = e.getAttribute('class');
							if (className === null) continue;
							className = className.split(' ');
							if (className.includes('xfPreview')) {
								styleObserver.observe(e, {
									attributes: true,
									attributeFilter: ['style']
								});
							}
							if (className.includes('message') && className.includes('message--post')) {
								md($(e.querySelector('article.message-body .bbWrapper')));
							}
						}
					}
				});
			});

			observer.observe(loc.includes('threads/') ? document.querySelector('.p-body-pageContent') : document.body, {
				childList: true,
				subtree: true,
				attributes: false,
				characterData: false
			});
		}
	});
}

if (!window.Prism) {
	let prism = document.createElement('script');
	prism.src = PRISM_PATH; // your own prism script. it's recommended to be the same as that of the forum.
	prism.setAttribute('data-manual', null);
	prism.setAttribute('xf-markdown', null);
	prism.addEventListener('load', e => {
		main();
	});
	document.head.appendChild(prism);
} else {
	main();
}
