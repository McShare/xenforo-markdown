function waitFor(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitFor("a[data-original-title='风格选择']").then(() => {
    console.log('Detecting dark mode...')
    const __darkIndicator = document.querySelector("a[data-original-title='风格选择']");
    if (__darkIndicator !== null) {
        if (__darkIndicator.innerHTML === '暗夜黑') {
            console.log('[XFMD] Detected dark mode.');
            document.querySelector('.xfPreview')?.classList.add('dark');
            document.querySelectorAll('article.message-body').forEach(e => e.classList.add('dark'));
            document.querySelectorAll('article.resourceBody-main').forEach(e => e.classList.add('dark'));
        }
    }
})