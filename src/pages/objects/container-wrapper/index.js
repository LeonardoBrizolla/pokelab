function createContainerWrapper() {
  const $containerWrapper = document.createElement('section');
  $containerWrapper.classList.add('container-fluid');
  $containerWrapper.classList.add('d-flex');
  $containerWrapper.classList.add('justify-content-center');
  $containerWrapper.classList.add('flex-column');
  $containerWrapper.classList.add('align-items-center');
  $containerWrapper.classList.add('bg-dark');
  $containerWrapper.classList.add('p-5');

  return $containerWrapper;
}
