import Share from 'ninelines-sharing';

$('.js-share-button').on('click', (e) => {
	let $button = $(e.currentTarget);
	let social = $button.data('social');
	let page = $button.data('href') || location.pathname;
	let url = location.origin;

	$button.trigger('blur');

	if (page.startsWith('/')) {
		page = page.slice(1);
	}

	if (page) {
		url += `/share.php?page=${encodeURIComponent(page)}`;
	}

	switch (social) {
		case 'vk':
			Share.vk(url);
			break;

		case 'facebook':
			Share.facebook(url);
			break;

		case 'twitter':
			Share.twitter(url);
			break;

		// no default
	}
});
