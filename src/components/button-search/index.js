function createButtonSearch() {
  const $buttonSearch = document.createElement('button');
  $buttonSearch.classList.add('btn');
  $buttonSearch.classList.add('btn-primary');
  $buttonSearch.type = 'submit';
  $buttonSearch.dataset.search = 'button-search';
  $buttonSearch.textContent = 'Buscar';

  $wrapContainer.insertBefore($buttonSearch, null);
}
