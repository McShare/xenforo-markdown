import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import { filterXSS, IFilterXSSOptions } from 'xss';

export class XfmdParseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

const XSS_RULE: IFilterXSSOptions = {
	// 白名单，键为元素标签名，值为允许携带的属性数组
	whiteList: {
		h1: ['id', 'style', 'class', 'role', 'tabindex'],
		h2: ['id', 'style', 'class', 'role', 'tabindex'],
		h3: ['id', 'style', 'class', 'role', 'tabindex'],
		h4: ['id', 'style', 'class', 'role', 'tabindex'],
		h5: ['id', 'style', 'class', 'role', 'tabindex'],
		h6: ['id', 'style', 'class', 'role', 'tabindex'],
		span: ['id', 'style', 'class', 'role', 'tabindex'],
		b: ['id', 'style', 'class', 'role', 'tabindex'],
		strong: ['id', 'style', 'class', 'role', 'tabindex'],
		em: ['id', 'style', 'class', 'role', 'tabindex'],
		i: ['id', 'style', 'class', 'role', 'tabindex'],
		p: ['id', 'style', 'class', 'role', 'tabindex'],
		center: ['id', 'style', 'class', 'role', 'tabindex'],
		small: ['id', 'style', 'class', 'role', 'tabindex'],
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
		table: ['id', 'style', 'class', 'role', 'tabindex'],
		td: ['id', 'style', 'class', 'role', 'tabindex'],
		th: ['id', 'style', 'class', 'role', 'tabindex'],
		tr: [],
		thead: ['id', 'style', 'class', 'role', 'tabindex'],
		tbody: ['id', 'style', 'class', 'role', 'tabindex'],
		ul: ['id', 'style', 'class', 'role', 'tabindex'],
		ol: ['id', 'style', 'class', 'role', 'tabindex'],
		li: ['id', 'style', 'class', 'role', 'tabindex'],
		img: ['src', 'style', 'class', 'id', 'alt', 'title', 'height', 'weight', 'loading'],
		div: ['style', 'class', 'title', 'id'],
		blockquote: ['id', 'style', 'class', 'role', 'tabindex'],
		del: [],
		hr: [],
		br: [],
		button: ['type', 'class', 'id', 'style'],
		pre: ['class', 'id', 'style', 'dir'],
		code: ['id', 'style', 'class', 'role', 'tabindex'],
		a: ['href', 'style', 'class', 'target', 'title', 'rel', 'role', 'tabindex'],
		u: ['id', 'style', 'class', 'role', 'tabindex'],
		s: [],
		input: ['value', 'type', 'class', 'id', 'style'],
		style: []
	},
	onIgnoreTagAttr(tag, name, value, isWhite) {
		// 忽略data-开头的属性
		if (name.startsWith('data-')) return name + '="' + value + '"';
	},
	// 不允许script标签
	stripIgnoreTagBody: ['script']
};

/**
 * 将原 HTML 和纯文本根据 [MD] 标记进行解析，生成渲染后的 HTML 内容
 * @param rawHtml 原HTML完整内容，对应innerHTML
 * @param rawText 原纯文本完整内容，对应textContent
 * @returns 解析后的 HTML 纯文本数组
 */
export function renderMdBlocks(rawHtml: string, rawText: string) {
	function removeFirstReturn(from: string): string {
		return from.replace('\n', '');
	}

	function recoverMD(raw: string): string {
		return raw.replace(/\\\[MD\\\]/g, '[MD]').replace(/\\\[\/MD\\\]/g, '[/MD]');
	}

	let result: string[] = [];
	let htmlBeforeAndAfterEndtagSlice: string[],
		textBeforeAndAfterEndtagSlice: string[],
		currentHtmlSlice: string,
		currentTextSlice: string;

	const Markdown = new MarkdownIt({
		linkify: true
	});

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
 * 将指定元素的innerHTML替换为解析后的HTML
 * @param e Markdown 文本所在元素
 */
export function renderAndReplace(e: Element | null) {
    if (!e) {
        console.warn(`[XFMD] Empty value passed as element.`)
        return;
    }
	if (!e.textContent.includes('[MD]')) return;
	if (!e.textContent.includes('[/MD]')) {
		console.warn(
			`[XFMD] No ending markup found in element ${e}, which may produce unexpected result.`
		);
	}

	let result = renderMdBlocks(e.innerHTML, e.textContent).join('');

    if (result.trim().length === 0) {
        throw new XfmdParseError('Empty result returned')
    }

	e.innerHTML = filterXSS(result, XSS_RULE);

	if (!e.innerHTML.includes('pre')) {
		return;
	}

	// 将元素e的HTML内容中的代码块替换为符合论坛样式的代码块，并调用Prism对e中的所有pre元素进行高亮
	e.innerHTML = e.innerHTML
		.replace(
			/<pre(.*?)class="(\w+)"(.*?)data-lang="(\w+)"(.*?)><code>((.|\n)*?)<\/code><\/pre>/g,
			`<pre$1class="$2 language-$4"$3data-lang="$4"$5><code class="language-$4">$6</code></pre>`
		)
		.replace(
			/<pre><code class=".*?language-(\w+).*?">((.|\n)*?)<\/code><\/pre>/g,
			`<div class="bbCodeBlock bbCodeBlock--screenLimited bbCodeBlock--code"><div class="bbCodeBlock-title">$1:</div><div class="bbCodeBlock-content"><pre class="bbCodeCode line-numbers language-$1"><code class="language-$1">$2</code></pre></div></div>`
		);

	e.querySelectorAll('pre').forEach(preElement => {
		Prism.highlightElement(preElement);
	});
}
