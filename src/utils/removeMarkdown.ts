import removeMd from 'remove-markdown';

/**
 * 移除 Markdown 文本中的所有表格格式，将表格转换为纯文本
 * 表格中的单元格之间用单个空格分隔，表格分隔线被忽略，非表格行保持不变
 * @param markdown 完整的 Markdown 文本
 * @returns 处理后的纯文本
 */
export function removeMarkdownTables(markdown: string) {
	if (typeof markdown !== 'string') return '';

	const lines = markdown.split('\n');
	const result: string[] = [];
	let i = 0;
	const len = lines.length;

	/**
	 * 判断是否为表格分隔线行（只包含 |、空格、-、:，且至少有三个连续 -）
	 * @param line 要检查的行
	 * @returns 是否为分隔线
	 */
	const isSeparatorLine = (line: string): boolean => {
		const trimmed = line.trim();
		if (trimmed.length === 0) return false;
		if (!/^[\s\|\:\-]+$/.test(trimmed)) return false;
		return /-{3,}/.test(trimmed);
	};

	/**
	 * 将表格行转换为纯文本：去除首尾 |，按 | 分割单元格，去空格后用空格连接
	 * @param row 表格行
	 * @returns 转换后的纯文本
	 */
	const convertTableRow = (row: string): string => {
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

/**
 * 移除文本中的markdown
 * @param markdown 带有Markdown的文本
 * @returns 移除了Markdown的文本
 */
export function removeMarkdown(markdown: string) {
	return removeMarkdownTables(removeMd(markdown));
}
