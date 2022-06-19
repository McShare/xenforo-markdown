/**
 * @package xenforo-markdown
 * @author Subilan
 * @license MIT
 *
 * markdown.css must be loaded to display correctly.
 */

import { escapeAttrValue, IFilterXSSOptions } from 'xss';
import Prism from 'prismjs';
import $ from 'jquery';
import Showdown from 'showdown';

const loc = window.location.href;
const ATTR = {
	basic: ['id', 'style', 'class'],
	none: [],
	iframe: ['name', 'height', 'width', 'src', 'referrerpolicy', 'importance', 'allow'],
        input: ['value', 'type', 'class', 'id', 'style']
};
const xssRule: IFilterXSSOptions = {
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
		iframe: ATTR.iframe,
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
		u: ATTR.basic,
		s: ATTR.none,
                input: ATTR.input,
                style: ATTR.none
	},
	onIgnoreTagAttr: (tag, name, value, isWhite) => {
		if (name.startsWith('data-')) return name + '="' + escapeAttrValue(value) + '"';
	},
	stripIgnoreTagBody: ['script']
};
const Markdown = new Showdown.Converter();
Markdown.setFlavor('github');

/**
 *
 * @param {string} from 输入文本
 * @returns 处理后内容
 *
 * 移除输入文本的开头空行
 */
function removeFirstReturn(from: string) {
	return from.replace('\n', '');
}

/**
 *
 * @param {string} rawHtml 原 HTML 完整内容
 * @param {string} rawText 原纯文本完整内容
 * @returns 解析后的 HTML 纯文本
 */
function getMarkdownResult(rawHtml: string, rawText: string) {
	let result = [];
	let k, l, e, f;
	// 将原 HTML 根据 [MD] 分成若干部分
	let sp = rawHtml.split('[MD]');
	// 将原纯文本根据 [MD] 分成若干部分
	let spT = rawText.split('[MD]');
	// 对任意以 [MD] 开头的部分进行操作
	for (let i = 0; i < sp.length; i++) {
		e = sp[i];
		f = spT[i];
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
		result.push(Markdown.makeHtml(recoverMD(l[0])));
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
function recoverMD(raw: string) {
	return raw.replace(/\\\[MD\\\]/g, '[MD]').replace(/\\\[\/MD\\\]/g, '[/MD]');
}

/**
 *
 * @param {JQuery} jqObject Markdown 文本所在元素的 JQuery 对象
 *
 * 将指定元素的纯文本内容替换为转义后的 HTML 同时并入文档。
 */
function md(jqObject: JQuery<HTMLElement>) {
	let content = jqObject;
	let html: string, result: string, text: string, el: JQuery<HTMLElement>;
	content.each((i, e) => {
		el = $(e);
		html = el.html();
		text = el.text();
		result = getMarkdownResult(html, text).join('');
		if (result.trim().length > 0) {
			el.html(filterXSS(result, xssRule));
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
function post(url: string, data: any) {
	return $.ajax({
		method: 'POST',
		url,
		data
	});
}

/**
 * 将指定 JQuery 对象中的未格式化纯代码替换为论坛自带的代码格式，并使用 Prism 高亮化
 *
 * @param {JQuery} targetJq 所要操作的元素的 JQuery 对象
 */
function convertRawPreCode(targetJq: JQuery<HTMLElement>) {
	targetJq.each((i, e) => {
		$(e).html(
			$(e)
				.html()
				.replace(
					/<pre(.*?)class="(\w+)"(.*?)data-lang="(\w+)"(.*?)><code>((.|\n)*?)<\/code><\/pre>/g,
					`<pre$1class="$2 language-$4"$3data-lang="$4"$5><code class="language-$4">$6</code></pre>`
				)
				.replace(
					/<pre><code class=".*?language-(\w+).*?">((.|\n)*?)<\/code><\/pre>/g,
					`<div class="bbCodeBlock bbCodeBlock--screenLimited bbCodeBlock--code"><div class="bbCodeBlock-title">$1:</div><div class="bbCodeBlock-content"><pre class="bbCodeCode line-numbers language-$1"><code class="language-$1">$2</code></pre></div></div>`
				)
		);
	});
	Prism.highlightAllUnder(targetJq[0]);
}

function main() {
	$(() => {
		post('/css.php', {
			css: 'public:bb_code.less',
			s: '51',
			l: '2'
		}).done(a => {
			let style = document.createElement('style');
			style.innerText = a;
			style.setAttribute('xf-markdown', '');
			document.head.appendChild(style);
		});
		let targetEl: JQuery<HTMLElement> | null = null;
		if (loc.includes('threads/')) {
			targetEl = $('article.message-body .bbWrapper');
		}

		if (loc.includes('pages/how-2-ask')) {
			targetEl = $('.p-body-pageContent .block-body.block-row');
		}

		if (loc.includes('resources/')) {
			targetEl = $('.resourceBody .bbWrapper');
		}

		if (targetEl === null) return;

		md(targetEl);
		convertRawPreCode(targetEl);

		if (loc.includes('post-thread') || loc.includes('threads/') || loc.includes('/edit')) {
			let styleObserver = new MutationObserver(mutations => {
				mutations.forEach(r => {
					let tg = r.target as HTMLElement;
					if (tg.style.display === '') {
						let el = $('.xfPreview .bbWrapper');
						md(el);
						convertRawPreCode(el);
					}
				});
			});
			let observer = new MutationObserver(mutations => {
				mutations.forEach(r => {
					if (loc.includes('threads/')) {
						let tg = r.target as HTMLElement;
						if (tg) {
							let className = tg.getAttribute('class');
							if (className === null) return;
							if (className.includes('message-cell message-cell--main is-editing')) {
								let tgChild = tg.querySelector('article.message-body .bbWrapper');
								if (tgChild !== null) {
									let el = $(tgChild) as JQuery<HTMLElement>;
									if (el.text().includes('[MD]') && el.text().includes('[/MD]')) {
										md(el);
										convertRawPreCode(el);
									}
								}
							}
						}
					}
					if (r.addedNodes.length === 0) return;
					for (let i = 0; i < r.addedNodes.length; i++) {
						let updatedNode = r.addedNodes[i] as HTMLElement;
						if (updatedNode.getAttribute) {
							let className = updatedNode.getAttribute('class');
							if (className === null) continue;
							let classNames = className.split(' ');
							if (classNames.includes('xfPreview')) {
								styleObserver.observe(updatedNode, {
									attributes: true,
									attributeFilter: ['style']
								});
							}
							if (classNames.includes('message') && classNames.includes('message--post')) {
								let tgChild = updatedNode.querySelector('article.message-body .bbWrapper');
								if (tgChild !== null) {
									let el = $(tgChild) as JQuery<HTMLElement>;
									md(el);
									convertRawPreCode(el);
								}
							}
						}
					}
				});
			});

			observer.observe(loc.includes('threads/') ? (document.querySelector('.p-body-pageContent') as Node) : document.body, {
				childList: true,
				subtree: true,
				attributes: false,
				characterData: false
			});
		}
	});
}

main();