require('ninelines-ua-parser');

let webp = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
let webpAlpha = 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==';

async function testDataImage(data) {
	if (!window.createImageBitmap || !window.fetch) {
		return false;
	}

	let blob = await fetch(data).then((r) => r.blob());

	return createImageBitmap(blob).then(() => true, () => false);
}

testDataImage(webp).then((isSupported) => {
	document.documentElement.classList.add(isSupported ? 'webp' : 'no-webp');
});

testDataImage(webpAlpha).then((isSupported) => {
	document.documentElement.classList.add(isSupported ? 'webp-alpha' : 'no-webp-alpha');
});
