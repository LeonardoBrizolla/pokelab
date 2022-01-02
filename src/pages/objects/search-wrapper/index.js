const createSearchWrapper = () => {
  const $searchWrapper = document.createElement('form');
  $searchWrapper.classList.add('container-fluid');
  $searchWrapper.classList.add('d-flex');
  $searchWrapper.classList.add('justify-content-center');
  $searchWrapper.classList.add('flex-column');
  $searchWrapper.classList.add('align-items-center');
  $searchWrapper.classList.add('p-5');
  $searchWrapper.method = 'GET';
  $searchWrapper.onsubmit = (event) => {
    handleSearchPokemon(event);
  };
  return $searchWrapper;
};
