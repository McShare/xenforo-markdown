import { renderAndReplace } from './parse';
import addColorSchemeClass from './utils/addColorSchemeClass';

/**
 * 综合当前所处的页面信息，为页面上容纳内容的相关元素添加监听器，用于实现
 * - 编辑器内点击预览按钮，切换到预览视图时的Markdown渲染
 * - 页面中发布新内容后，不刷新情况下对新内容的Markdown渲染
 * - 对页面中发布的新内容中的编辑器内预览行为继续添加监听器
 */
export default function observers() {
	const pathname = window.location.pathname;

	/**
	 * 对目标元素内容进行渲染与替换，
	 * 并根据当前所处的色彩模式添加相应的class
	 * @param e 目标元素
	 */
	function renderElement(e: Element | null) {
		addColorSchemeClass(e); // https://www.minebbs.com/threads/markdown.44257
		renderAndReplace(e);
	}

	/**
	 * 为targetElement中存在的帖子内容和个性签名同时调用addClassAndRender
	 * @param targetElement 包含帖子内容和个性签名的包装元素
	 * @returns
	 */
	function renderPostContentAndSignature(targetElement: Element | null) {
		if (!targetElement) return;
		const [content, signature] = [
			// 帖子内容
			targetElement.querySelector('article.message-body .bbWrapper'),
			// 个性签名
			targetElement.querySelector('aside.message-signature .bbWrapper')
		];
		addColorSchemeClass(targetElement);
		if (content) renderAndReplace(content);
		if (signature) renderAndReplace(signature);
	}

	if (
		/^\/(post-thread|threads|resources|direct-messages)\/.*$/.test(pathname) ||
		/\/edit\/?$/.test(pathname)
	) {
		// 监听编辑输入框预览状态的改变（通过style.display）
		let showUnshowObserver = new MutationObserver(mutations => {
			mutations.forEach(r => {
				let tg = r.target as HTMLElement;
				if (tg.style.display === '') {
					renderElement(document.querySelector('.xfPreview'));
				}
			});
		});

		let observer = new MutationObserver(mutations => {
			mutations.forEach(r => {
				if (/^\/threads\/.*$/.test(window.location.pathname)) {
					let tg = r.target as HTMLElement;
					if (tg) {
						let className = tg.getAttribute('class');
						if (className === null) return;
						if (className.includes('message-cell message-cell--main is-editing')) {
							renderPostContentAndSignature(tg);
						}
					}
				}

				if (r.addedNodes.length === 0) return;

				// 自动转换新增的节点中可能含有的 markdown 内容
				for (let i = 0; i < r.addedNodes.length; i++) {
					let addedNode = r.addedNodes[i] as HTMLElement;
					if (addedNode.getAttribute) {
						let className = addedNode.getAttribute('class');
						if (className === null) continue;

						// 如果新增节点中包含预览区.xfPreview
						// 则为节点附加showUnshowObserver的监听
						if (className.includes('xfPreview')) {
							showUnshowObserver.observe(addedNode, {
								attributes: true,
								attributeFilter: ['style']
							});
						}

						// 判定是否为可能包含用户内容的节点
						if (/message(--post|--conversationMessage|-main)?/.test(className)) {
							let tg = addedNode.querySelector('article.message-body');
							renderPostContentAndSignature(tg);

							console.log(
								`[XFMD] Rendered new item at ${new Date().toLocaleString()}`
							);
						}
					}
				}
			});
		});

		const observeTarget = /^\/(threads|direct-messages)\/.*$/.test(pathname)
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
}
