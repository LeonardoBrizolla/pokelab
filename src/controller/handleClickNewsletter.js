const handleClickNewsletter = () => {
  const $modal = document.querySelector('.newsletter-modal');
  $modal.addEventListener('focus', () => {
    const $inputNewsletter = document.querySelector(
      '[data-input="input-newsletter"]'
    );
    $inputNewsletter.focus();
    $inputNewsletter.select();
  });
};
