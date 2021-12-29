function createCardsWrapper() {
  const $cardsWrapper = document.createElement('section');
  $cardsWrapper.classList.add('container');
  $cardsWrapper.classList.add('d-flex');
  $cardsWrapper.classList.add('flex-wrap');
  $cardsWrapper.classList.add('justify-content-around');
  $cardsWrapper.classList.add('mt-3');
  $cardsWrapper.dataset.wrapper = 'cards-wrapper';

  return $cardsWrapper;
}
