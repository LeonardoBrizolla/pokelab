const handleClickSearchPokemon = async () => {
  const $inputSearch = document.querySelector(`[data-search="input-search"]`);
  const $cardsWrapper = document.querySelector('#cards-wrapper');
  $cardsWrapper.remove();

  const $imagesWrapper = document.querySelector('#images-wrapper');
  const $newCardsWrapper = createCardsWrapper();
  $imagesWrapper.insertAdjacentElement('beforeend', $newCardsWrapper);

  const pokemon = $inputSearch.value;
  await getCardPokemon(pokemon);
  window.location.href = '#cards-wrapper';
};
