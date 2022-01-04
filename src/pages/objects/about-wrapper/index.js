const createAboutWrapper = () => {
  const $aboutWrapper = document.createElement('section');
  $aboutWrapper.classList.add('container');
  $aboutWrapper.classList.add('d-flex');
  $aboutWrapper.classList.add('flex-column');
  $aboutWrapper.classList.add('p-5');
  $aboutWrapper.style = 'max-width: 1000px';

  return $aboutWrapper;
};
