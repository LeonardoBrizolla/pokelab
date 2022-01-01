const handleClickButtonNewsletter = () => {
  const $modal = document.querySelector('.newsletter-modal');
  $modal.addEventListener('focus', () => {
    const $inputNewsletter = document.querySelector(
      '[data-search="input-newsletter"]'
    );
    $inputNewsletter.focus();
    $inputNewsletter.select();
  });
};
