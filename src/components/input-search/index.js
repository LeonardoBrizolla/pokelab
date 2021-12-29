function createInputSearch() {
  const $inputSearch = document.createElement('input');

  $inputSearch.type = 'text';
  $inputSearch.placeholder = 'Pikachu...';
  $inputSearch.dataset.search = 'input-search';
  $inputSearch.classList.add('form-control');
  $wrapContainer.insertBefore($inputSearch, null);
}
