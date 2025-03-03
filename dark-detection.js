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

document.addEventListener('DOMContentLoaded', () => {
	waitFor("a[class*='js-styleVariationsLink']").then(() => {
		console.log('Detecting dark mode...');
		const __darkIndicator = document.querySelector("a[class*='js-styleVariationsLink']");
		if (__darkIndicator !== null) {
			if (__darkIndicator.innerHTML.includes('fa-moon')) {
				console.log('[XFMD] Detected dark mode.');
				document.querySelector('.xfPreview')?.classList.add('dark');
				document.querySelectorAll('article.message-body').forEach(e => e.classList.add('dark'));
				document.querySelectorAll('article.resourceBody-main').forEach(e => e.classList.add('dark'));
			}
		}
	
		let __darkObserver = new MutationObserver(mutations => {
			mutations.forEach(m => {
				const __darkIndicator = document.querySelector("a[class*='js-styleVariationsLink']");
				if (__darkIndicator !== null) {
					if (__darkIndicator.innerHTML.includes('fa-moon')) {
						console.log('[XFMD] Detected dark mode.');
						document.querySelector('.xfPreview')?.classList.add('dark');
						document.querySelectorAll('article.message-body').forEach(e => e.classList.add('dark'));
						document.querySelectorAll('article.resourceBody-main').forEach(e => e.classList.add('dark'));
					} else {
						document.querySelector('.xfPreview')?.classList.remove('dark');
						document.querySelectorAll('article.message-body').forEach(e => e.classList.remove('dark'));
						document.querySelectorAll('article.resourceBody-main').forEach(e => e.classList.remove('dark'));
					}
				}
			});
		});
	
		__darkObserver.observe(document.querySelector("a[class*='js-styleVariationsLink']"), {
			childList: true,
			subtree: true
		});
	});
	
})