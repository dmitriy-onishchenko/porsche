function init($page) {
	return;

	$page.find('.js-iframe').each((index, container) => {
		let $container = $(container);
		let src = $container.data('src');

		$container.html(`<iframe src="${src}"></iframe>`);
	});
}

function destroy($page) {
	return;

	$page.find('.js-iframe').empty();
}

export default {
	init,
	destroy,
};
