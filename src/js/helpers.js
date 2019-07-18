export default {
	isMobile() {
		return innerWidth <= 1024;
	},

	isDesktop() {
		return !this.isMobile();
	},

	isIE() {
		return document.documentElement.classList.contains('is-browser-ie');
	},

	canInteract(flag) {
		if (arguments.length) {
			document.documentElement.dataset.interaction = (!!flag).toString();

			return !!flag;
		}

		return document.documentElement.dataset.interaction !== 'false';
	},

	clearText(text) {
		return $('<div>').html(text).text().trim().replace(/\s+/g, ' ');
	},
};
