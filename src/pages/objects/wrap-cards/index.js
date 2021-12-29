const $wrapCards = document.createElement('section');

$wrapCards.classList.add('container');
$wrapCards.classList.add('d-flex');
$wrapCards.classList.add('flex-wrap');
$wrapCards.classList.add('justify-content-around');
$wrapCards.classList.add('mt-3');
$wrapCards.dataset.wrap = 'wrap-cards';
$wrapContainer.insertBefore($wrapCards, null);
