let loc = location.href;
let css = document.createElement('link');
css.rel = 'stylesheet';
css.type = 'text/css';
css.href = '/styles/markdown.css';
document.head.appendChild(css);
if (!window.Prism) {
    let prism = document.createElement("script");
    prism.src = "/js/prism.js"; // your own prism script. it's recommended to be the same as that of the forum.
    prism.setAttribute("data-manual", null);
    document.head.appendChild(prism);
}

function highlightAs(str, lang) {
    return Prism.highlight(str, Prism.languages[lang], lang);
}

const md = window
	.markdownit({
		breaks: true,
		linkify: true,
		html: false,
		highlight: (str, lang) => {
			if (lang && Prism.languages.hasOwnProperty(lang)) {
				return (
					'<div class="bbCodeBlock bbCodeBlock--screenLimited bbCodeBlock--code"><div class="bbCodeBlock-title">' +
					lang +
					':</div><div class="bbCodeBlock-content"><pre class="bbCodeCode line-numbers language-' +
					lang +
					'"><code class="language-' +
					lang +
					'">' +
					highlightAs(str, lang) +
					'</code></pre></div></div>'
				);
			} else {
				return (
					'<div class="bbCodeBlock bbCodeBlock--screenLimited bbCodeBlock--code"><div class="bbCodeBlock-title">代码</div><div class="bbCodeBlock-content"><pre class="bbCodeCode line-numbers"><code>' +
					str +
					'</code></pre></div></div>'
				);
			}
		}
	})
	.enable(['blockquote']);

function removeHtml(from) {
	return from.replaceAll(/<\/?(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|bgsound|big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|main|map|mark|marquee|menu|menuitem|meta|meter|nav|nobr|noframes|noscript|object|ol|optgroup|option|output|p|param|plaintext|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|spacer|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr|xmp)\b[^<>]*>/g, '');
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
		result.push(md.render(recoverMD(l[0])));
		result.push(removeFirstReturn(recoverMD(k[1])));
	}
	return result;
}

function recoverMD(raw) {
    return raw.replaceAll("\\[MD\\]", "[MD]").replaceAll("\\[/MD\\]", "[/MD]");
}

function recoverHTMLChars(raw) {
    return raw.replaceAll("&gt;", ">").replaceAll("&lt;", "<");
}

function makeMarkdowned(jqObject) {
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

$(document).ready(() => {
	if (loc.includes('threads/')) {
		makeMarkdowned($('article.message-body .bbWrapper'));
	}

	if (loc.includes('post-thread') || loc.includes('threads/')) {
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
					// make markdown when saving edition.
					let classes = mutation.target.getAttribute('class');
					if (classes !== null) {
						if (classes.includes('message-cell')) {
							let el = $(mutation.target.querySelector('.bbWrapper'));
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
