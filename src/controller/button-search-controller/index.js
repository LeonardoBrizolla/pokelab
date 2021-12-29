function handleClickSearchPokemon() {
  const $buttonSearch = document.querySelector(`[data-search="button-search"]`);
  const $inputSearch = document.querySelector(`[data-search="input-search"]`);

  $buttonSearch.addEventListener('click', () => {
    const pokemon = $inputSearch.value;
    getPokemon(pokemon);
  });
}

handleClickSearchPokemon();
