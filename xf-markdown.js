const CSS_PATH = '/styles/markdown.css';
const PRISM_PATH = '/js/prism.js';
let loc = location.href;
let css = document.createElement('link');
css.rel = 'stylesheet';
css.type = 'text/css';
css.href = CSS_PATH;
document.head.appendChild(css);

function highlightAs(str, lang) {
	return Prism.highlight(str, Prism.languages[lang], lang);
}

function removeHtml(from) {
	return from.replaceAll(
		/<\/?(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|bgsound|big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|main|map|mark|marquee|menu|menuitem|meta|meter|nav|nobr|noframes|noscript|object|ol|optgroup|option|output|p|param|plaintext|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|spacer|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr|xmp)\b[^<>]*>/g,
		''
	);
}

function removeFirstReturn(from) {
	return from.replace('\n', '');
}

function getMarkdownResult(rawHtml, rawText) {
	let result = [];
	let k, l, e, f;
	let sp = rawHtml.split('[MD]');
	let spT = rawText.split('[MD]');
	for (let i = 0; i < sp.length; i++) {
		e = recoverHTMLChars(sp[i]);
		f = recoverHTMLChars(spT[i]);
		if (!e.includes('[/MD]')) {
			result.push(recoverMD(removeFirstReturn(e)));
			continue;
		}
		k = e.split('[/MD]');
		l = f.split('[/MD]');
		result.push(window.MARKDOWN.makeHtml(recoverMD(l[0])));
		result.push(removeFirstReturn(recoverMD(k[1])));
	}
	return result;
}

function recoverMD(raw) {
	return raw.replaceAll('\\[MD\\]', '[MD]').replaceAll('\\[/MD\\]', '[/MD]');
}

function recoverHTMLChars(raw) {
	return raw.replaceAll('&gt;', '>').replaceAll('&lt;', '<');
}

function makeMarkdowned(jqObject, manual) {
	if (manual) {
		jqObject.text('加载中...');
		jqObject.html(getMarkdownResult(manual.text, manual.text).join(''));
	} else {
		let content = jqObject;
		let html, result, text;
		content.each((i, e) => {
			e = $(e);
			html = e.html();
			text = e.text();
			e.text('加载中...');
			result = getMarkdownResult(html, text).join('');
			e.html(result);
		});
	}
}

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
						console.log(e);
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
			makeMarkdowned($('article.message-body .bbWrapper'));
		}

		if (loc.includes('post-thread') || loc.includes('threads/')) {
			post('/css.php', {
				css: 'public:CMTV_Code_Prism_plugins.less,public:CMTV_Code_code_block.less,public:bb_code.less,public:bb_code_preview.less'
			}).done(a => {
				let style = document.createElement('style');
				style.innerText = a;
				style.setAttribute('xf-markdown', null);
				document.head.appendChild(style);
			});
			let styleObserver = new MutationObserver(mutations => {
				mutations.forEach(r => {
					if (r.target.style.display === '') {
						makeMarkdowned($('.xfPreview .bbWrapper'));
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
									makeMarkdowned(el);
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
								makeMarkdowned($(e.querySelector('article.message-body .bbWrapper')));
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
