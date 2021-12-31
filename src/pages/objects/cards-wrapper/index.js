function createCardsWrapper() {
  const $cardsWrapper = document.createElement('section');
  $cardsWrapper.classList.add('container');
  $cardsWrapper.classList.add('d-flex');
  $cardsWrapper.classList.add('flex-wrap');
  $cardsWrapper.classList.add('justify-content-around');
  $cardsWrapper.classList.add('mt-3');
  $cardsWrapper.classList.add('sticky-bottom');
  $cardsWrapper.dataset.wrapper = 'cards-wrapper';
  $cardsWrapper.id = 'cards-wrapper';
  return $cardsWrapper;
}
