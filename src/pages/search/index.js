const $root = document.querySelector('#root');

const $containerWrapper = createContainerWrapper();
const $title = createTitle();
const $inputSearch = createInputSearch();
const $buttonSearch = createButtonSearch();
const $cardsWrapper = createCardsWrapper();

$containerWrapper.insertAdjacentHTML('beforeend', $title);
$containerWrapper.insertAdjacentHTML('beforeend', $inputSearch);
$containerWrapper.insertAdjacentHTML('beforeend', $buttonSearch);
$containerWrapper.insertAdjacentElement('beforeend', $cardsWrapper);

$root.insertAdjacentElement('beforeend', $containerWrapper);
