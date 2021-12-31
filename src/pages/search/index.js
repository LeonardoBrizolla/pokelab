const $root = document.querySelector('#root');

const $headerWrapper = createHeaderWrapper();
const $navigation = createNavigation();
const $header = createHeader();

const $mainWrapper = createMainWrapper();
const $searchWrapper = createSearchWrapper();
const $titleSearch = createTitleSearch({ title: 'Buscar' });
const $inputSearch = createInputSearch({
  type: 'text',
  placeholder: 'Gengar...',
  dataAttribute: 'input-search',
  nameClass: 'form-control p-2 mb-3 search-pokelab',
  spellcheck: 'false',
});
const $buttonSearch = createButtonSearch({
  nameClass: 'btn btn-primary button-search',
  type: 'submit',
  dataAttribute: 'button-search',
  onClick: 'handleClickSearchPokemon()',
  textContent: 'Buscar',
});

const $imagesWrapper = createImagesWrapper();
const $cardsWrapper = createCardsWrapper();
const $buttonTop = createButtonTop();
const $footer = createFooter();

$headerWrapper.insertAdjacentHTML('beforeend', $navigation);
$headerWrapper.insertAdjacentHTML('beforeend', $header);

$mainWrapper.insertAdjacentElement('beforeend', $searchWrapper);
$searchWrapper.insertAdjacentHTML('beforeend', $titleSearch);
$searchWrapper.insertAdjacentHTML('beforeend', $inputSearch);
$searchWrapper.insertAdjacentHTML('beforeend', $buttonSearch);

$mainWrapper.insertAdjacentElement('beforeend', $imagesWrapper);
$imagesWrapper.insertAdjacentElement('beforeend', $cardsWrapper);
$imagesWrapper.insertAdjacentHTML('beforeend', $buttonTop);

$root.insertAdjacentElement('beforeend', $headerWrapper);
$root.insertAdjacentElement('beforeend', $mainWrapper);
$root.insertAdjacentHTML('beforeend', $footer);
