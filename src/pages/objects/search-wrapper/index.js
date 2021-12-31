const createSearchWrapper = () => {
  const $searchWrapper = document.createElement('section');
  $searchWrapper.classList.add('container-fluid');
  $searchWrapper.classList.add('d-flex');
  $searchWrapper.classList.add('justify-content-center');
  $searchWrapper.classList.add('flex-column');
  $searchWrapper.classList.add('align-items-center');
  $searchWrapper.classList.add('p-5');
  return $searchWrapper;
};
