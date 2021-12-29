const $root = document.querySelector('#root');

const $containerWrapper = createContainerWrapper();
const $title = createTitle({ title: 'PokeLab Busca' });
const $inputSearch = createInputSearch({
  type: 'text',
  placeholder: 'Digite um nome de Pokemon...',
  dataAttribute: 'input-search',
  nameClass: 'form-control',
});
const $buttonSearch = createButtonSearch({
  nameClass: 'btn btn-primary',
  type: 'submit',
  dataAttribute: 'button-search',
  onClick: 'handleClickSearchPokemon()',
  textContent: 'Buscar Pokemon',
});
const $cardsWrapper = createCardsWrapper();

$containerWrapper.insertAdjacentHTML('beforeend', $title);
$containerWrapper.insertAdjacentHTML('beforeend', $inputSearch);
$containerWrapper.insertAdjacentHTML('beforeend', $buttonSearch);
$containerWrapper.insertAdjacentElement('beforeend', $cardsWrapper);

$root.insertAdjacentElement('beforeend', $containerWrapper);
