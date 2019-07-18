import helpers from './helpers';
import loader from './loader';
import home from './home';
import timeline from './timeline';

let $html = $(document.documentElement);
let $header = $('.header');

function $getPageByState(state) {
	if (!state.route) {
		return null;
	}

	if (state.route.name === 'home') {
		return home.$getPage();
	}

	if (state.route.name === 'timeline') {
		return timeline.$getPage(state.params.id);
	}

	return null;
}

function changePage($fromPage, $toPage) {
	$html.data('theme', $toPage.data('page-theme'));
	$html.attr('data-theme', $toPage.data('page-theme'));
	$header.prop('hidden', false);
	$toPage.prop('hidden', false);

	if ($fromPage) {
		$fromPage.prop('hidden', true);
	}

	$('a[data-router-link]').each((index, link) => {
		$(link).toggleClass('is-active', link.getAttribute('href') === location.pathname);
	});
}

export default function (fromState, toState) {
	return new Promise((resolve) => {
		let $fromPage = $getPageByState(fromState);
		let $toPage = $getPageByState(toState);
		let isDirect = !$fromPage;
		let fromPageType = $fromPage && ($fromPage.hasClass('home') ? 'home' : 'timeline');
		let toPageType = $toPage.hasClass('home') ? 'home' : 'timeline';

		helpers.canInteract(false);

		if (toPageType === 'timeline') {
			loader.setText($toPage.attr('id').replace('timeline-', ''));
		} else {
			loader.setText('');
		}

		if (isDirect) {
			changePage($fromPage, $toPage, toPageType);

			loader.show(toPageType, true)
				.then(() => loader.animateProgress(() => {
					if (fromPageType === 'home') {
						home.reset($fromPage);
					}

					if (fromPageType === 'timeline') {
						timeline.reset($fromPage);
					}

					return toPageType === 'home' ? home.init($toPage) : timeline.init($toPage);
				}))
				.then(() => loader.hide(toPageType))
				.then(() => {
					helpers.canInteract(true);
					resolve();
				});
		} else {
			loader.show(toPageType)
				.then(() => {
					changePage($fromPage, $toPage, toPageType);
				})
				.then(() => loader.animateProgress(() => {
					if (fromPageType === 'home') {
						home.reset($fromPage);
					}

					if (fromPageType === 'timeline') {
						timeline.reset($fromPage);
					}

					return toPageType === 'home' ? home.init($toPage) : timeline.init($toPage);
				}))
				.then(() => loader.hide(toPageType))
				.then(() => {
					helpers.canInteract(true);
					resolve();
				});
		}
	});
}
