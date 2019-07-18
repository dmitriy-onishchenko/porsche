import keyboard from './keyboard';
import helpers from './helpers';
import TransparentPlayer from './transparent-player';
import router from './router';
import lazyIframe from './lazy-iframe';

let $info = $('.home__info');
let $infoToggle = $('.home__info__toggle');
let isInfoOpen;

function $getPage() {
	return $('.home');
}

function openInfo() {
	if (isInfoOpen) {
		return;
	}

	isInfoOpen = true;
	$info.addClass('is-open');
}

function closeInfo() {
	if (!isInfoOpen) {
		return;
	}

	isInfoOpen = false;
	$info.removeClass('is-open');
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

		playerMain.stopRendering();
		playerLoop.startRendering();
		playerLoop.video.play();

		return Promise.resolve();
	}

	$page.addClass('is-initialized');

	playerMain = new TransparentPlayer($playerMain.get(0));
	playerLoop = new TransparentPlayer($playerLoop.get(0));

	$page.data('player-main', playerMain);
	$page.data('player-loop', playerLoop);

	lazyIframe.init($page);

	return Promise.all([
		playerMain.init(false),
		playerLoop.init(),
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
					let href = $('.home__start').get(0).getAttribute('href');

					$page.removeClass('is-playing');
					$page.addClass('is-complete');

					router.navigate(href);
				});

			playerLoop.video.play();
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
	$page.removeClass('is-playing is-paused is-complete');
}

$('.home__start').on('click', (e) => {
	let $page = $getPage();
	let playerMain = $page.data('player-main');
	let playerLoop = $page.data('player-loop');

	e.preventDefault();

	if (!helpers.canInteract()) {
		return;
	}

	helpers.canInteract(false);

	$page.removeClass('is-not-started');
	playerMain.startRendering();
	playerLoop.video.pause();

	setTimeout(() => {
		helpers.canInteract(true);
		playerMain.video.play();
		playerLoop.stopRendering();
	}, 600);
});

$infoToggle
	.on('click', (e) => {
		if (helpers.isMobile()) {
			e.stopPropagation();
			openInfo();
		}
	})
	.on('keydown', (e) => {
		if ([keyboard.ENTER, keyboard.SPACE].includes(e.keyCode)) {
			openInfo();
		}
	});

$info.on('click touchstart', (e) => {
	e.stopPropagation();
});

$(document)
	.on('click touchstart', () => {
		closeInfo();
	})
	.on('keydown', (e) => {
		if (e.keyCode === keyboard.ESCAPE) {
			closeInfo();
		}
	});

export default {
	init,
	reset,
	$getPage,
};
