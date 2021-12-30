const $root = document.querySelector('#root');

const $containerWrapper = createContainerWrapper();
const $navigation = createNavigation();
const $header = createHeader();
const $titleSearch = createTitleSearch({ title: 'Buscar' });
const $inputSearch = createInputSearch({
  type: 'text',
  placeholder: 'Digite um nome de Pokémon...',
  dataAttribute: 'input-search',
  nameClass: 'form-control w-50 -pokelab p-2 fs-5 mb-5',
});
const $buttonSearch = createButtonSearch({
  nameClass: 'btn btn-primary p-1 w-25 fs-5 mb-4',
  type: 'submit',
  dataAttribute: 'button-search',
  onClick: 'handleClickSearchPokemon()',
  textContent: 'Buscar Pokémon',
});
const $cardsWrapper = createCardsWrapper();
const $footer = createFooter();

$containerWrapper.insertAdjacentHTML('beforeend', $titleSearch);
$containerWrapper.insertAdjacentHTML('beforeend', $inputSearch);
$containerWrapper.insertAdjacentHTML('beforeend', $buttonSearch);

$root.insertAdjacentHTML('beforeend', $navigation);
$root.insertAdjacentHTML('beforeend', $header);
$root.insertAdjacentElement('beforeend', $containerWrapper);
$root.insertAdjacentElement('beforeend', $cardsWrapper);
$root.insertAdjacentHTML('beforeend', $footer);
