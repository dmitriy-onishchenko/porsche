import keyboard from './keyboard';
import TransparentPlayer from './transparent-player';
import router from './router';
import lazyIframe from './lazy-iframe';

let $html = $(document.documentElement);
let $shareOpened;
let $popupOpened;

function $getPage(id) {
	return $(`#timeline-${id}`);
}

function exists(id) {
	return !!$getPage(id).length;
}

function openPopup($popup) {
	let $page = $popup.closest('.page');
	let playerMain = $page.data('player-main');

	if (playerMain && !playerMain.video.paused) {
		playerMain.video.pause();
		$page.addClass('is-temporarily-paused');
	}

	new TimelineMax({
		onStart() {
			$html.addClass('is-popup-open');
			$popup.addClass('is-open');
			$popupOpened = $popup;
		},
	})
		.from($popup, 0.7, {
			autoAlpha: 0,
			clearProps: 'all',
		}, 0);
}

function closePopup() {
	if (!$popupOpened) {
		return;
	}

	let $page = $popupOpened.closest('.page');
	let playerMain = $page.data('player-main');

	new TimelineMax({
		onStart() {
			$html.removeClass('is-popup-open');
		},
		onComplete() {
			if ($popupOpened) {
				$popupOpened.removeClass('is-open');
				TweenMax.set($popupOpened, {clearProps: 'all'});
				$popupOpened = null;
			}

			if (playerMain && $page.hasClass('is-temporarily-paused')) {
				playerMain.video.play();
				$page.removeClass('is-temporarily-paused');
			}
		},
	})
		.to($popupOpened, 0.7, {
			autoAlpha: 0,
		});
}

function openShare($share) {
	$share.addClass('is-open');
	$shareOpened = $share;
}

function closeShare() {
	if (!$shareOpened) {
		return;
	}

	$shareOpened.removeClass('is-open');
	$shareOpened = null;
}

function init($page) {
	let $playerMain = $page.find('.transparent-player--main');
	let $playerLoop = $page.find('.transparent-player--loop');
	let playerMain;
	let playerLoop;

	$page.addClass('is-not-started');
	$page.removeClass('is-playing is-paused is-complete');

	if (!$playerMain.length || !$playerLoop.length) {
		return Promise.resolve();
	}

	if ($page.hasClass('is-initialized')) {
		playerMain = $page.data('player-main');
		playerLoop = $page.data('player-loop');

		playerMain.video.currentTime = 0;
		playerLoop.video.currentTime = 0;

		playerMain.startRendering();
		playerLoop.stopRendering();

		return Promise.resolve();
	}

	$page.addClass('is-initialized');

	playerMain = new TransparentPlayer($playerMain.get(0));
	playerLoop = new TransparentPlayer($playerLoop.get(0));

	$page.data('player-main', playerMain);
	$page.data('player-loop', playerLoop);

	lazyIframe.init($page);

	return Promise.all([
		playerMain.init(),
		playerLoop.init(false),
	])
		.then(() => {
			$(playerMain.video)
				.on('play', () => {
					$page.removeClass('is-not-started is-paused');
					$page.addClass('is-playing');
				})
				.on('pause', () => {
					$page.removeClass('is-playing');
					$page.addClass('is-paused');
				})
				.on('ended', () => {
					$page.removeClass('is-playing');
					$page.addClass('is-complete');

					playerLoop.startRendering();

					setTimeout(() => {
						playerMain.stopRendering();
						playerLoop.video.play();
					}, 600);
				});
		});
}

function reset($page) {
	let playerMain = $page.data('player-main');
	let playerLoop = $page.data('player-loop');

	if (!playerMain || !playerLoop) {
		return;
	}

	playerMain.video.pause();
	playerLoop.video.pause();

	playerMain.video.currentTime = 0;
	playerLoop.video.currentTime = 0;

	playerMain.stopRendering();
	playerLoop.stopRendering();

	lazyIframe.destroy($page);

	$page.addClass('is-not-started');
	$page.removeClass('is-playing is-paused is-complete is-temporarily-paused');
}

$('.timeline__pin').on('click', (e) => {
	let $pin = $(e.currentTarget);
	let $popup = $(`#${$pin.data('popup-id')}`);

	openPopup($popup);
});

$('.timeline__popup__close').on('click', (e) => {
	let $button = $(e.currentTarget);

	$button.trigger('blur');
	closePopup();
});

$('.timeline__play__button, .timeline__start').on('click', (e) => {
	let $button = $(e.currentTarget);
	let $page = $button.closest('.page');
	let playerMain = $page.data('player-main');

	$button.trigger('blur');

	if (!playerMain) {
		return;
	}

	if ($page.hasClass('is-complete')) {
		if ($page.hasClass('is-last')) {
			router.navigate('/');
		} else {
			let href = $page.find('.timeline__navigation__link.is-active').next().get(0).getAttribute('href');

			router.navigate(href);
		}
	} else if ($page.hasClass('is-not-started') || $page.hasClass('is-paused')) {
		playerMain.video.play();
	} else if ($page.hasClass('is-playing')) {
		playerMain.video.pause();
	}
});

$('.timeline__sound__toggle').on('click', (e) => {
	let $button = $(e.currentTarget);
	let $page = $button.closest('.timeline');
	let playerMain = $page.data('player-main');

	$button.trigger('blur');

	if (!playerMain) {
		return;
	}

	playerMain.video.muted = !playerMain.video.muted;
	$page.toggleClass('is-muted');
});

$('.timeline__share__toggle')
	.on('click', (e) => {
		let $button = $(e.currentTarget);
		let $share = $button.closest('.timeline__share');

		$button.trigger('blur');
		openShare($share);
	})
	.on('keydown', (e) => {
		let $button = $(e.currentTarget);
		let $share = $button.closest('.timeline__share');

		if ([keyboard.ENTER, keyboard.SPACE].includes(e.keyCode)) {
			openShare($share);
		}
	});

$('.timeline__share').on('click touchstart', (e) => {
	e.stopPropagation();
});

$(document)
	.on('click touchstart', () => {
		closeShare();
	})
	.on('keydown', (e) => {
		if (e.keyCode === keyboard.ESCAPE) {
			closeShare();
			closePopup();
		}
	});

export default {
	init,
	reset,
	exists,
	$getPage,
};
