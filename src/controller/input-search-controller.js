const handleTriggerEnterInputSearch = () => {
  const $inputSearch = document.querySelector(`[data-search="input-search"]`);

  $inputSearch.addEventListener('keyup', async (event) => {
    const pokemon = $inputSearch.value;

    if (event.keyCode === 13) {
      try {
        const $cardsWrapper = document.querySelector('#cards-wrapper');
        $cardsWrapper.remove();

        const $imagesWrapper = document.querySelector('#images-wrapper');
        const $newCardsWrapper = createCardsWrapper();
        $imagesWrapper.insertAdjacentElement('beforeend', $newCardsWrapper);

        await getCardPokemon(pokemon);
        $inputSearch.value = '';
        $inputSearch.focus();
        $inputSearch.select();
        window.location.href = '#cards-wrapper';
      } catch (error) {
        console.log(error);
      }
    }
  });
};
handleTriggerEnterInputSearch();
