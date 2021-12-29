async function handleClickSearchPokemon() {
  const $inputSearch = document.querySelector(`[data-search="input-search"]`);
  const pokemon = $inputSearch.value;
  await getCardPokemon(pokemon);
}
