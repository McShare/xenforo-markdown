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
import MarkdownIt from 'markdown-it';
import _ from 'underscore';
import removeMd from 'remove-markdown';

const loc = window.location.href;
let renderCount = 0;
const ATTR = {
	basic: ['id', 'style', 'class', 'role', 'tabindex'],
	none: [],
	iframe: [
		'name',
		'height',
		'width',
		'src',
		'referrerpolicy',
		'importance',
		'allow',
		'scrolling',
		'frameborder'
	],
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
		a: ['href', 'style', 'class', 'target', 'title', 'rel', 'role', 'tabindex'],
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
const Markdown = new MarkdownIt({
	linkify: true
});

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
 * @param from 已解析 Markdown 的 HTML
 * @param prefix 对应帖子的 ID
 * @returns 过滤用户输入标签的已解析 HTML
 */
// function filterUnauthorizedHtml(from: string, editURL: string) {
// 	return new Promise<string>((resolve, reject) => {
// 		get(editURL)
// 			.done(r => {
// 				let input = r;
// 				if (!input) {
// 					console.error('[Filter] Failed to fetch edit content.');
// 				}
// 				const magic = /<input type="hidden" value="([\s\S][^"]*)"([^>])*>/;
// 				let result = magic.exec(input);
// 				if (result !== null) {
// 					let raw = _.unescape(result[1]);
// 					raw = raw.replace(/\[(ICODE|CODE)\](.*?)\[\/(ICODE|CODE)\]/gi, '[$1]' + _.escape('$2') + '[/$3]'); // 避免对正常展示性代码的误判。
// 					raw = raw.replace(/(href|src)="\[URL\](.*?)\[\/URL\]"/gi, '$1="$2"'); // 修复xf自动将href/src值替换为bbcode的URL造成的不匹配。
// 					raw.match(/(<\w+\s[^>]*>.*?<\/\w+>)/gi)?.forEach(k => {
// 						console.warn('[Filter] Removed unauthorized HTML tag: ' + k);
// 						from = from.replace(k, '');
// 					});
// 					raw.match(/(<\w+[^(\/|>)]*\/>)/gi)?.forEach(k => {
// 						console.warn('[Filter] Removed unauthorized HTML tag: ' + k);
// 						from = from.replace(k, '');
// 					});
// 				} else {
// 					console.error('[Filter] Failed to format edit content.');
// 				}
// 				resolve(from);
// 			})
// 			.catch(e => reject);
// 	});
// }

/**
 *
 * @param {string} rawHtml 原 HTML 完整内容
 * @param {string} rawText 原纯文本完整内容
 * @returns 解析后的 HTML 纯文本
 */
function getMarkdownResult(rawHtml: string, rawText: string) {
	let result = [];
	let htmlBeforeAndAfterEndtagSlice,
		textBeforeAndAfterEndtagSlice,
		currentHtmlSlice,
		currentTextSlice;
	// 将原 HTML 根据 [MD] 分成若干部分
	let htmlSlice1 = rawHtml.split('[MD]');
	// 将原纯文本根据 [MD] 分成若干部分
	let textSlice1 = rawText.split('[MD]');
	// 对任意以 [MD] 开头的部分进行操作
	for (let i = 0; i < htmlSlice1.length; i++) {
		currentHtmlSlice = htmlSlice1[i];
		currentTextSlice = textSlice1[i];
		// 如果当前部分不含有结束符，则代表当前部分之内的内容均为正文内容
		// 于是将当前部分内容转义后加入 result 中
		if (!currentHtmlSlice.includes('[/MD]')) {
			result.push(recoverMD(removeFirstReturn(currentHtmlSlice)));
			continue;
		}
		// 如果当前部分含有结束符，则将当前部分从结束符处分为上部分和下部分
		// k 为 HTML 纯文本，l 为纯文本
		htmlBeforeAndAfterEndtagSlice = currentHtmlSlice.split('[/MD]');
		textBeforeAndAfterEndtagSlice = currentTextSlice.split('[/MD]');
		// 将纯文本的上部分进行解析后加入 result
		result.push(Markdown.render(recoverMD(textBeforeAndAfterEndtagSlice[0])));
		// 将 HTML 的下部分（即非 [MD][/MD] 之间的部分）直接加入 result
		result.push(removeFirstReturn(recoverMD(htmlBeforeAndAfterEndtagSlice[1])));
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
function md(jqObject: JQuery<Element>) {
	let content = jqObject;
	let html: string, result: string, text: string, el: JQuery<Element>;
	content.each((i, e) => {
		el = $(e);
		html = el.html();
		text = el.text();
		result = getMarkdownResult(html, text).join('');
		// filterUnauthorizedHtml(result, location.href + 'edit')
		// 	.then(r => {
		if (result.trim().length > 0) {
			el.html(filterXSS(result, xssRule));
			renderCount++;
		} else {
			console.warn('[XFMD] Failed to render markdown content.');
		}
		// })
		// .catch(e => {
		// 	console.warn('[XFMD] Failed to filter markdown content.');
		// });
	});
}

/**
 * 将指定 JQuery 对象中的未格式化纯代码替换为论坛自带的代码格式，并使用 Prism 高亮化
 *
 * @param {JQuery} targetJq 所要操作的元素的 JQuery 对象
 */
function convertRawPreCode(targetJq: JQuery<Element>) {
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

function getClassnameFromDarkIndicator(indicator: HTMLElement | null = null) {
	if (indicator === null) {
		indicator = document.querySelector("a[class*='js-styleVariationsLink']");
	}

	if (indicator === null) return '';

	if (indicator.innerHTML.includes('fa-moon')) {
		return 'dark';
	} else if (indicator.innerHTML.includes('fa-adjust')) {
		return 'darkauto';
	}

	return '';
}

/**
 * 移除 Markdown 文本中的所有表格格式，将表格转换为纯文本。
 * 表格中的单元格之间用单个空格分隔，表格分隔线被忽略，非表格行保持不变。
 *
 * @param {string} markdown - 完整的 Markdown 文本
 * @returns {string} 处理后的纯文本
 */
function removeMarkdownTables(markdown: string) {
	if (typeof markdown !== 'string') return '';

	const lines = markdown.split('\n');
	const result = [];
	let i = 0;
	const len = lines.length;

	// 判断是否为表格分隔线行（只包含 |、空格、-、:，且至少有三个连续 -）
	const isSeparatorLine = (line: string) => {
		const trimmed = line.trim();
		if (trimmed.length === 0) return false;
		if (!/^[\s\|\:\-]+$/.test(trimmed)) return false;
		return /-{3,}/.test(trimmed);
	};

	// 将表格行转换为纯文本：去除首尾 |，按 | 分割单元格，去空格后用空格连接
	const convertTableRow = (row: string) => {
		let trimmed = row.trim();
		if (trimmed.startsWith('|')) trimmed = trimmed.substring(1);
		const cells = trimmed.split('|').map(cell => cell.trim());
		return cells.join(' ');
	};

	while (i < len) {
		const currentLine = lines[i];
		const nextLine = i + 1 < len ? lines[i + 1] : null;

		// 检测表格开始：当前行包含 '|' 且下一行是分隔线
		if (currentLine.includes('|') && nextLine && isSeparatorLine(nextLine)) {
			// 处理表头行
			result.push(convertTableRow(currentLine));
			i++; // 跳过分隔线（即 nextLine）
			i++; // 移动到分隔线之后的第一行（可能的数据行）

			// 处理连续的数据行，直到遇到非表格行或新表格的开始
			while (i < len) {
				const dataLine = lines[i];
				// 如果下一行是分隔线，说明当前行可能是新表格的表头，结束当前表格
				if (i + 1 < len && isSeparatorLine(lines[i + 1])) {
					break;
				}
				// 数据行必须包含 '|' 且本身不是分隔线
				if (dataLine.includes('|') && !isSeparatorLine(dataLine)) {
					result.push(convertTableRow(dataLine));
					i++;
				} else {
					break; // 遇到不含 '|' 的行（如空行）或分隔线，表格结束
				}
			}
			// 注意：此时 i 指向第一个非表格行，外层循环会继续处理该行
		} else {
			// 普通行直接保留
			result.push(currentLine);
			i++;
		}
	}

	return result.join('\n');
}
function main() {
	const startTime = new Date().getTime();
	// get('/css.php?css=public:bb_code.less&s=51&l=2').done(a => {
	// 	let style = document.createElement('style');
	// 	style.innerText = a;
	// 	style.setAttribute('xf-markdown', '');
	// 	document.head.appendChild(style);
	// });

	let targetEls: ArrayLike<Element> | null = null;
	if (loc.includes('threads/')) {
		targetEls = [
			...Array.from(document.querySelectorAll('article.message-body .bbWrapper')),
			...Array.from(document.querySelectorAll('aside.message-signature .bbWrapper'))
		];
	}

	if (loc.includes('pages/how-2-ask')) {
		targetEls = document.querySelectorAll('.p-body-pageContent .block-body.block-row');
	}

	if (loc.includes('resources/')) {
		if (loc.includes('/updates')) {
			// for resource updates page
			// Pattern: /resources/xyz/updates
			targetEls = document.querySelectorAll('.message-userContent .bbWrapper');
		} else if (loc.includes('/extra')) {
			// for English introduction page
			// Pattern: /resources/xyz/extra
			targetEls = document.querySelectorAll(
				'.p-body-pageContent .block-body.block-row .bbWrapper'
			);
		} else {
			targetEls = document.querySelectorAll('.resourceBody .bbWrapper');
		}
	}

	if (loc.includes('direct-messages/')) {
		targetEls = document.querySelectorAll('.message-userContent .bbWrapper');
	}

	// remove markdown
	if (loc.includes('search/')) {
		const searchDigests: NodeListOf<HTMLDivElement> = document.querySelectorAll(
			'.block-container .block-row .contentRow-snippet'
		);
		searchDigests.forEach(digest => {
			// console.log(
			// 	`debug remove markdown:\n--- before ---\n${digest.textContent}\n--- after ---\n${removeMarkdownTables(removeMd(digest.textContent))}`
			// );
			digest.innerText = removeMarkdownTables(removeMd(digest.textContent))
				.replace(/\n/g, ' ')
				.replace(/\[\/?MD\]/g, '');
		});
	}

	if (targetEls !== null) {
		Array.from(targetEls).forEach(e => {
			md($(e));
			convertRawPreCode($(e));
		});
	}

	if (
		loc.includes('post-thread') ||
		loc.includes('threads/') ||
		loc.includes('/edit') ||
		loc.includes('resources/') ||
		loc.includes('direct-messages/')
	) {
		let styleObserver = new MutationObserver(mutations => {
			mutations.forEach(r => {
				let tg = r.target as HTMLElement;
				if (tg.style.display === '') {
					let el = $('.xfPreview');
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
							let tgChilds = [
								tg.querySelector('article.message-body .bbWrapper'),
								tg.querySelector('aside.message-signature .bbWrapper')
							];
							tgChilds.forEach(tgChild => {
								if (tgChild !== null) {
									let el = $(tgChild) as JQuery<HTMLElement>;
									if (el.text().includes('[MD]') && el.text().includes('[/MD]')) {
										md(el);
										convertRawPreCode(el);
									}
								}
							});
						}
					}
				}

				if (r.addedNodes.length === 0) return;

				// 自动转换新增的节点中可能含有的markdown内容

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

						// 判定是否为可能包含新增用户内容的节点

						if (
							classNames.includes('message') &&
							(classNames.includes('message--post') || // 发帖页面
								className.includes('message--conversationMessage')) // 会话页面
						) {
							let tgContentWrapper =
								updatedNode.querySelector('article.message-body');

							const darkClassname = getClassnameFromDarkIndicator();

							console.log(
								`[XFMD] Rendered new item added at ${new Date().toLocaleString()}`
							);

							if (darkClassname !== '' && tgContentWrapper !== null) {
								tgContentWrapper.classList.add(darkClassname);
							}

							let tgContents = [
								updatedNode.querySelector('article.message-body .bbWrapper'),
								updatedNode.querySelector('aside.message-signature .bbWrapper')
							];
							tgContents.forEach(tgContent => {
								if (tgContent !== null) {
									let el = $(tgContent) as JQuery<HTMLElement>;
									md(el);
									convertRawPreCode(el);
								}
							});
						}
					}
				}
			});
		});

		const observeTarget =
			loc.includes('threads/') || loc.includes('direct-messages/')
				? (document.querySelector('.p-body-pageContent') as Node)
				: document.body;

		if (observeTarget)
			observer.observe(observeTarget, {
				childList: true,
				subtree: true,
				attributes: false,
				characterData: false
			});
	}

	const endTime = new Date().getTime();

	if (renderCount > 0) {
		console.log(`Took ${endTime - startTime}ms rendering ${renderCount} items.`);
	}
}

$(() => main());
