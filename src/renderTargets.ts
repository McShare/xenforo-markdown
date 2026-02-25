const TARGET_PATTERNS = new Map([
	[/^\/threads\/.*$/, ['article.message-body .bbWrapper', 'aside.message-signature .bbWrapper']],
	[/^\/pages\/.*$/, ['.p-body-pageContent .block-body.block-row']],
	[/^\/resources\/.*\/updates.*$/, ['.message-userContent .bbWrapper']],
	[/^\/resources\/.*\/extra.*$/, ['.p-body-pageContent .block-body.block-row .bbWrapper']],
	[/^\/resources\/.*$/, ['.resourceBody .bbWrapper']],
	[/^\/direct-messages\/.*$/, ['.message-userContent .bbWrapper']]
]);

export default function getRenderTargets() {
	const pathname = window.location.pathname;

    for (const pattern of TARGET_PATTERNS.keys()) {
        if (pattern.test(pathname)) {
            return TARGET_PATTERNS.get(pattern)?.map(selector => {
                const selection = document.querySelectorAll(selector);
                if (!selection || selection.length === 0) return []
                return Array.from(selection)
            }).flat()
        }
    }
}
