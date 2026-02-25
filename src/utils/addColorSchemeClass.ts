/**
 * 根据当前识别的页面色彩模式，为 el 添加相应的类
 * - dark 模式下添加.dark
 * - 自动模式下添加.darkauto
 * - light 模式下不添加
 * @param el 元素，注意只能添加到包装元素上才有效果，详见markdown.less
 */
export default function addColorSchemeClass(el: Element | null): void {
	if (!window.__xfmd_color_scheme || !el) return;

	if (window.__xfmd_color_scheme === 'dark') {
		el.classList.add('dark');
	} else if (window.__xfmd_color_scheme === 'auto') {
		el.classList.add('darkauto');
	}
}
