/**
 * Dependencies:
 * 
 * For JavaScript:
 * 
 * window.$ - from JQuery (external Library)
 * window.Prism - from Prism (external library)
 * window.filterXSS - from xss (external Library)
 * window.showdown - from Showdown (external Library)
 * 
 * They must be loaded before this file to work.
 * 
 * For CSS:
 * 
 * markdown.css - in repository
 * 
 * Must be loaded to display correctly.
 */

const loc = window.location.href;
const ATTR = {
	basic: ['id', 'style', 'class'],
	none: []
};
const xssRule = {
	whiteList: {
		h1: ATTR.basic,
		h2: ATTR.basic,
		h3: ATTR.basic,
		h4: ATTR.basic,
		h5: ATTR.basic,
		h6: ATTR.basic,
		span: ATTR.basic,
		b: ATTR.basic,
		strong: ATTR.basic,
		em: ATTR.basic,
		i: ATTR.basic,
		p: ATTR.basic,
		center: ATTR.basic,
		small: ATTR.basic,
		iframe: ATTR.none,
		table: ATTR.basic,
		td: ATTR.basic,
		th: ATTR.basic,
		tr: ATTR.none,
		thead: ATTR.basic,
		tbody: ATTR.basic,
		ul: ATTR.basic,
		ol: ATTR.basic,
		li: ATTR.basic,
		img: ['src', 'style', 'class', 'id', 'alt', 'title', 'height', 'weight', 'loading'],
		div: ['style', 'class', 'title', 'id'],
		blockquote: ATTR.basic,
		del: ATTR.none,
		hr: ATTR.none,
		br: ATTR.none,
		button: ['type', 'class', 'id', 'style'],
		pre: ['class', 'id', 'style', 'dir'],
		code: ATTR.basic,
		a: ['href', 'style', 'class', 'target', 'title', 'rel'],
		u: ATTR.basic
	},
	onIgnoreTagAttr: (tag, name, value, isWhite) => {
		if (name.startsWith('data-')) return name + '="' + filterXSS.escapeAttrValue(value) + '"';
	}
};

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
 * @deprecated
 * @param {string} from 输入文本
 * @param {boolean} outer 是否针对外部
 * @returns 移除后的文本
 *
 * 移除不允许的 HTML 标签（黑名单模式）。针对外部的移除会更加宽松，保证外部格式正常显示。
 */
function removeBannedHTML(from, outer = false) {
	let reg = outer
		? /<(\/?)(acronym|address|applet|area|article|aside|base|basefont|bdi|bdo|bgsound|big|blink|canvas|caption|cite|col|colgroup|data|datalist|details|dfn|dir|fieldset|figcaption|figure|font|frame|frameset|head|header|footer|hgroup|html|input|ins|isindex|keygen|label|legend|link|listing|main|map|mark|marquee|menu|menuitem|meta|meter|nav|nobr|noframes|noscript|object|optgroup|option|output|param|plaintext|progress|rp|rt|ruby|s|samp|script|select|source|spacer|style|summary|textarea|time|title|track|var|video|audio|wbr|xmp)(\b[^<>]*)>/g
		: /<(\/?)(abbr|acronym|address|applet|area|article|aside|audio|base|basefont|bdi|bdo|bgsound|big|blink|body|button|canvas|caption|cite|col|colgroup|data|datalist|dd|details|dfn|dir|div|dl|dt|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|head|header|hgroup|html|iframe|input|ins|isindex|keygen|label|legend|link|listing|main|map|mark|marquee|menu|menuitem|meta|meter|nav|nobr|noframes|noscript|object|optgroup|option|output|param|plaintext|progress|q|rp|rt|ruby|s|samp|script|section|select|source|spacer|style|summary|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|var|video|wbr|xmp)(\b[^<>]*)>/g;
	return from.replace(reg, '&lt;$1$2$3&gt;');
}

/**
 * 
 * @param {string} from 输入文本
 * @returns 移除后的文本
 * 
 * 将不允许的 HTML 标签或者无效标签与有效标签划分开。
 */
function filter(from) {
	let reg = /<(\/?)(h1|h2|h3|h4|h5|h6|iframe|b|strong|em|i|p|a|center|small|table|td|th|tr|thead|tbody|ul|ol|li|img|div|blockquote|del|span|br|hr|button|pre|code)(\b[^<>]*)>/g;
	return from.replace('&lx;', '<').replace('gx;', '>').replace(reg, '&lx;$1$2$3&gx;').replace('<', '&lt;').replace('>', '&gt;');
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
		e = recoverValidHTML(filter(sp[i]));
		f = recoverValidHTML(filter(spT[i]));
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
 * 将 `&gx;` 和 `&lx;` 转换为正常的 `<` 和 `>` 字符
 */
function recoverValidHTML(raw) {
	return raw.replace(/&gx;/g, '>').replace(/&lx;/g, '<');
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
									highlightAs(recoverGtLtEntity(content), lang) +
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

main();
