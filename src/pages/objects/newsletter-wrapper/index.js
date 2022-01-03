const createNewsletterWrapper = () => {
  const $newsletterWrapper = document.createElement('section');
  $newsletterWrapper.classList.add('container-fluid');
  $newsletterWrapper.classList.add('d-flex');
  $newsletterWrapper.classList.add('justify-content-center');
  $newsletterWrapper.classList.add('flex-column');
  $newsletterWrapper.classList.add('align-items-center');
  $newsletterWrapper.classList.add('p-5');
  return $newsletterWrapper;
};
