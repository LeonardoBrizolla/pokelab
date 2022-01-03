const handleSearchPokemon = async (event) => {
  event.preventDefault();
  const $inputSearch = document.querySelector(`[data-input="input-search"]`);
  const $cardsWrapper = document.querySelector('#cards-wrapper');
  $cardsWrapper.remove();

  const $imagesWrapper = document.querySelector('#images-wrapper');
  const $newCardsWrapper = createCardsWrapper();
  $imagesWrapper.insertAdjacentElement('beforeend', $newCardsWrapper);

  const pokemon = $inputSearch.value;
  await getCardPokemon(pokemon);
  window.location.href = '#cards-wrapper';
};
