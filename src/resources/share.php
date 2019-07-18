<?php

$host = 'http://porsche.style.rbc.ru';
$title = 'Вместе с Porsche путешествуем по эпохам';
$description = 'Следуйте за Амбарцумом Кабаняном';
$image = '/images/share/main.jpg';
$redirect = '/';

$pages = [
	'timeline/1898-1939' => [
		'title' => null,
		'description' => null,
		'image' => null,
	],
	'timeline/1950-1970' => [
		'title' => null,
		'description' => null,
		'image' => null,
	],
	'timeline/1980-1990' => [
		'title' => null,
		'description' => null,
		'image' => null,
	],
	'timeline/2000' => [
		'title' => null,
		'description' => null,
		'image' => null,
	],
	'timeline/2010-2018' => [
		'title' => null,
		'description' => null,
		'image' => null,
	],
	'timeline/2020-2035' => [
		'title' => null,
		'description' => null,
		'image' => null,
	],
];

$page = @$pages[$_GET['page']];

if ($page) {
	$title = !is_null(@$page['title']) ? $page['title'] : $title;
	$description = !is_null(@$page['description']) ? $page['description'] : $description;
	$image = !is_null(@$page['image']) ? $page['image'] : $image;
	$redirect = !is_null(@$page['redirect']) ? $page['redirect'] : "/{$_GET['page']}";
}

?>
<!doctype html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width">
	<meta name="description" content="<?= htmlspecialchars($description) ?>">
	<meta property="og:type" content="website">
	<meta property="og:title" content="<?= htmlspecialchars($title) ?>">
	<meta property="og:description" content="<?= htmlspecialchars($description) ?>">
	<meta property="og:image" content="<?= htmlspecialchars($image ? $host . $image : '') ?>">
	<meta property="og:locale" content="ru_RU">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="<?= htmlspecialchars($title) ?>">
	<meta name="twitter:description" content="<?= htmlspecialchars($description) ?>">
	<title><?= $title ?></title>
</head>
<body onload="window.location = '<?= $redirect ?>'"></body>
</html>
