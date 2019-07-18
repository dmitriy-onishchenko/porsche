/* global yaCounter51365074 */

import router from './router';
import scrollDepth from 'scroll-depth';
import helpers from './helpers';

function start15SecTimeout() {
	clearTimeout($(window).data('timeout15Sec'));

	$(window).data('timeout15Sec', setTimeout(() => {
		ga('rbcspec.send', 'event', 'page', 'spent_on_page_15_sec');
		ga('send', 'event', 'page', 'spent_on_page_15_sec');
	}, 15000));
}

function virtualHit(path) {
	if (window.ga) {
		ga('set', 'page', path);
		ga('send', 'pageview', path);
		ga('rbcspec.set', 'page', path);
		ga('rbcspec.send', 'pageview', path);
	}

	if (window.yaCounter51365074) {
		yaCounter51365074.hit(path);
	}
}

scrollDepth({
	userTiming: false,
	pixelDepth: false,
	gtmOverride: true,
	eventHandler(data) {
		ga('send', 'event', data.eventCategory, data.eventAction, data.eventLabel, {nonInteraction: true});
		ga('rbcspec.send', 'event', data.eventCategory, data.eventAction, data.eventLabel, {nonInteraction: true});
	},
});

router.on('enter', (prevState, currentState) => {
	start15SecTimeout();

	if (!currentState.route) {
		return Promise.resolve();
	}

	if (prevState.route) {
		virtualHit(location.pathname);
		scrollDepth.reset();
	}

	return Promise.resolve();
});

$('.header__logo-porsche, .stub__logo-porsche').on('click', () => {
	ga('send', 'event', 'client link', 'logo header');
	ga('rbcspec.send', 'event', 'client link', 'click');
});

$('.header__logo-rbc-style, .stub__logo-rbc').on('click', () => {
	ga('send', 'event', 'nav', 'rbc logo');
});

$('.home__info').on('mouseenter', () => {
	ga('send', 'event', 'nav', 'about project');
});

$('.timeline__navigation__link').on('click', (e) => {
	let name = helpers.clearText($(e.currentTarget).text());

	ga('send', 'event', 'nav', 'timeline', name);
});

$('.timeline__sound__toggle').on('click', () => {
	ga('send', 'event', 'nav', 'mute');
});

$('.home__start').on('click', () => {
	ga('send', 'event', 'main', 'start click');
});

$('.home__share__button').on('click', (e) => {
	let socialName = $(e.currentTarget).data('social');

	ga('send', 'event', 'share', 'main share', socialName);
});
