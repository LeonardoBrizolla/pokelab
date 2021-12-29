const $root = document.querySelector('#root');

const $containerWrapper = createContainerWrapper();
const $navigation = createNavigation();
const $header = createHeader();
const $titleSearch = createTitleSearch({ title: 'PokéLab Busca' });
const $inputSearch = createInputSearch({
  type: 'text',
  placeholder: 'Digite um nome de Pokémon...',
  dataAttribute: 'input-search',
  nameClass: 'form-control',
});
const $buttonSearch = createButtonSearch({
  nameClass: 'btn btn-primary',
  type: 'submit',
  dataAttribute: 'button-search',
  onClick: 'handleClickSearchPokemon()',
  textContent: 'Buscar Pokémon',
});
const $cardsWrapper = createCardsWrapper();

$containerWrapper.insertAdjacentHTML('beforeend', $titleSearch);
$containerWrapper.insertAdjacentHTML('beforeend', $inputSearch);
$containerWrapper.insertAdjacentHTML('beforeend', $buttonSearch);
$containerWrapper.insertAdjacentElement('beforeend', $cardsWrapper);

$root.insertAdjacentHTML('beforeend', $navigation);
$root.insertAdjacentHTML('beforeend', $header);
$root.insertAdjacentElement('beforeend', $containerWrapper);
