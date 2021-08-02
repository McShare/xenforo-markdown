let loc = location.href;
let lessJs = document.createElement('script');
lessJs.src = '//cdn.jsdelivr.net/npm/less@4.1.1';
document.head.appendChild(lessJs);
let css = document.createElement('link');
css.rel = 'stylesheet/less';
css.type = 'text/css';
css.href = '/styles/markdown.less';
document.head.appendChild(css);

const md = window.markdownit({
	breaks: true,
	linkify: true,
	html: false
});

function removeHtml(from) {
	return from.replaceAll(/<[^>]*>/g, '');
}

function removeFirstReturn(from) {
	return from.replace('\n', '');
}

function getMarkdownResult(rawHtml) {
	let result = [];
	let k, e;
	let sp = rawHtml.split('[MD]');
	for (let i = 0; i < sp.length; i++) {
		e = sp[i];
		if (!e.includes('[/MD]')) {
			result.push(removeFirstReturn(e));
			continue;
		}
		k = e.split('[/MD]');
		result.push(md.render(removeHtml(k[0])));
		result.push(removeFirstReturn(k[1]));
	}
	return result;
}

function makeMarkdowned(jqObject) {
	let content = jqObject;
	let html, result;
	content.each((i, e) => {
		e = $(e);
		html = e.html();
		e.text('加载中...');
		result = getMarkdownResult(html).join('');
		e.html(result);
	});
}

$(document).ready(() => {
	if (loc.includes('threads/')) {
		makeMarkdowned($('article.message-body .bbWrapper'));
	}

	if (loc.includes('post-thread') || loc.includes('threads/')) {
		(function () {
			orig = $.fn.css;
			$.fn.css = function () {
				var result = orig.apply(this, arguments);
				$(this).trigger('stylechanged');
				return result;
			};
		})();
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
							$(e).on('stylechanged', f => {
								if (f.target.style.display === '') {
									makeMarkdowned($('.xfPreview .bbWrapper'));
								}
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
