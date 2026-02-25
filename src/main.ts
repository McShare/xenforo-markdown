/**
 * @package xenforo-markdown
 * @author Subilan
 * @license MIT
 */

import { renderAndReplace, XfmdParseError } from './parse';
import { removeMarkdown } from './utils/removeMarkdown';
import getRenderTargets from './renderTargets';
import printXfmdAscii from './utils/printXFMDAscii';
import attachObservers from './observers';

declare global {
	interface Window {
		__xfmd_color_scheme?: 'dark' | 'light' | 'auto';
	}
}

function main() {
	printXfmdAscii();

	const startTime = Date.now();
	let [successCnt, failedCnt] = [0, 0];

	// 渲染
	getRenderTargets()?.forEach(e => {
		try {
			renderAndReplace(e);
		} catch (error) {
			if (error instanceof XfmdParseError) {
				console.warn(`[XFMD] Failed to render element ${e}`);
			}
		}
	});

	// 在搜索页面，移除搜索结果卡片中简介部分的markdown标记
	if (/^\/search\/.*$/.test(location.pathname)) {
		const searchDigests: NodeListOf<HTMLDivElement> = document.querySelectorAll(
			'.block-container .block-row .contentRow-snippet'
		);
		searchDigests.forEach(digest => {
			// 移除markdown并将换行替换为空格
			digest.innerText = removeMarkdown(digest.textContent)
				.replace(/\n/g, ' ')
				.replace(/\[\/?MD\]/g, '');
		});
	}

	attachObservers();

	const endTime = Date.now();

	if (successCnt + failedCnt > 0) {
		console.log(
			`Took ${endTime - startTime}ms rendering ${successCnt}/${successCnt + failedCnt} item(s).`
		);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	main();
});
