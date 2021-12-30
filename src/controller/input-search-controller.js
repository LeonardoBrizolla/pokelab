function handleTriggerEnterInputSearch() {
  const $inputSearch = document.querySelector(`[data-search="input-search"]`);

  $inputSearch.addEventListener('keyup', async (event) => {
    const pokemon = $inputSearch.value;

    if (event.keyCode === 13) {
      await getCardPokemon(pokemon);
      $inputSearch.value = '';
      $inputSearch.focus();
      $inputSearch.select();
    }
  });
}
handleTriggerEnterInputSearch();
