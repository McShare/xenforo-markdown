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

const __xfmd_darkdetect_targets = ['.xfPreview', 'article.message-body', 'article.resourceBody-main', '.message-userContent .message-body', 'aside.message-signature'];

function __xfmd__addTargetClass(className) {
	__xfmd_darkdetect_targets.forEach(selector => {
		document.querySelectorAll(selector).forEach(e => e.classList.add(className));
	});
}

function __xfmd__removeTargetClass(className) {
	__xfmd_darkdetect_targets.forEach(selector => {
		document.querySelectorAll(selector).forEach(e => e.classList.remove(className));
	});
}

function __xfmd__applyDarkDetection(indicator) {
	if (indicator.innerHTML.includes('fa-moon')) {
		console.log('[XFMD] Detected dark mode.');
		__xfmd__addTargetClass('dark');
		__xfmd__removeTargetClass('darkauto');
	} else if (indicator.innerHTML.includes('fa-sun')) {
		__xfmd__removeTargetClass('dark');
		__xfmd__removeTargetClass('darkauto');
	} else if (indicator.innerHTML.includes('fa-adjust')) {
		__xfmd__removeTargetClass('dark');
		__xfmd__addTargetClass('darkauto');
	}
}

document.addEventListener('DOMContentLoaded', () => {
	waitFor("a[class*='js-styleVariationsLink']").then(() => {
		console.log('[XFMD] Detecting dark mode...');
		const __darkIndicator = document.querySelector("a[class*='js-styleVariationsLink']");
		if (__darkIndicator !== null) {
			__xfmd__applyDarkDetection(__darkIndicator);
		}

		let __darkObserver = new MutationObserver(mutations => {
			mutations.forEach(m => {
				const __darkIndicator = document.querySelector("a[class*='js-styleVariationsLink']");
				if (__darkIndicator !== null) {
					__xfmd__applyDarkDetection(__darkIndicator);
				}
			});
		});

		__darkObserver.observe(document.querySelector("a[class*='js-styleVariationsLink']"), {
			childList: true,
			subtree: true
		});
	});
});
