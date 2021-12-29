function createButtonSearch() {
  const $buttonSearch = `
    <button
      class="btn btn-primary"
      type="submit"
      data-search="button-search"
      onClick="handleClickSearchPokemon()"
    >
      Buscar Pokemon
    </button>
  `;

  return $buttonSearch;
}
