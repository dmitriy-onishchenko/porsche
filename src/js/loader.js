import home from './home';

let $loader = $('.loader');
let $progress = $('.loader__progress');
let $text = $('.loader__progress__text');
let $start = $('.loader__progress__start');
let canvas = $loader.children('canvas').get(0);
let ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

function getOptionsByPage(pageType) {
	if (pageType === 'home') {
		let $home = home.$getPage();
		let $homeStart = $('.home__start');
		let homeHidden = $home.prop('hidden');

		$home.prop('hidden', false);

		let rect = $homeStart.get(0).getBoundingClientRect();

		$home.prop('hidden', homeHidden);

		return {
			x: (rect.x + rect.width / 2) / innerWidth,
			y: (rect.y + rect.height / 2) / innerHeight,
			size: rect.width + 75,
		};
	}

	if (pageType === 'timeline') {
		return {
			x: 1254 / 1700,
			y: 227 / 800,
			size: 293,
		};
	}

	return {
		x: 0.5,
		y: 0.5,
		size: 293,
	};
}

function draw(progress, x, y, size) {
	x *= innerWidth;
	y *= innerHeight;

	let a = Math.max(x, innerWidth - y);
	let b = Math.max(y, innerHeight - y);
	let maxRadius = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
	let minRadius = size / 2;
	let radius = minRadius + (1 - progress) * (maxRadius - minRadius);
	let opacity = progress;

	ctx.globalCompositeOperation = 'source-over';

	ctx.clearRect(0, 0, innerWidth, innerHeight);

	ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
	ctx.fillRect(0, 0, innerWidth, innerHeight);

	ctx.globalCompositeOperation = 'destination-out';

	ctx.fillStyle = '#f00';
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fill();
}

function setProgress(progress) {
	$progress.css('stroke-dashoffset', 1011 * (1 - progress));
}

function show(pageType, instant = false) {
	let {x, y, size} = getOptionsByPage(pageType);

	$loader.prop('hidden', false);
	$progress.css('left', `${x * 100}%`);
	$progress.css('top', `${y * 100}%`);
	$progress.width(size);
	$progress.height(size);

	draw(0, x, y, size);
	setProgress(0);

	if (instant) {
		$loader.addClass('is-loading');
		$progress.css('opacity', 1);
	}

	return new Promise((resolve) => {
		if (instant) {
			TweenMax.fromTo($progress, 0.3, {
				opacity: 0,
			}, {
				opacity: 1,
				delay: 1,
				onComplete: resolve,
			});

			return;
		}

		new TimelineMax({
			onComplete() {
				$loader.addClass('is-loading');
				resolve();
			},
		})
			.to({x: 0}, 0.5, {
				x: 1,
				ease: Power2.easeInOut,
				onUpdate() {
					draw(this.target.x, x, y, size);
				},
			}, 0)
			.fromTo($progress, 0.3, {
				opacity: 0,
			}, {
				opacity: 1,
			}, 0.5);
	});
}

function hide(pageType) {
	let {x, y, size} = getOptionsByPage(pageType);

	draw(1, x, y, size);
	setProgress(1);

	return new Promise((resolve) => {
		$loader.removeClass('is-loading');

		new TimelineMax({
			onComplete() {
				$loader.prop('hidden', true);
				$progress.removeClass('is-animated');
				resolve();
			},
		})
			.fromTo($progress, 0.3, {
				opacity: 1,
			}, {
				opacity: 0,
			}, 0)
			.to({x: 1}, 0.5, {
				x: 0,
				ease: Power2.easeInOut,
				onUpdate() {
					draw(this.target.x, x, y, size);
				},
			}, 0.3);
	});
}

function animateProgress(init) {
	$progress.addClass('is-animated');

	return Promise.all([
		init(),
		new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, 1000);
		}),
	]);
}

function setText(date) {
	let text;

	if (date === '2000') {
		text = '2000-е';
	} else {
		text = date.split('-').map((year) => `<span>${year}</span>`).join(' ');
	}

	$text.html(text);
	$text.prop('hidden', !date);
	$start.prop('hidden', !!date);
}

$(window).on('resize', () => {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
});

export default {
	show,
	hide,
	animateProgress,
	setText,
};
