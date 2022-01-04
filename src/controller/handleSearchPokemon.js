const handleSearchPokemon = async (event) => {
  event.preventDefault();

  const cardPokemon = createCard();
  const $infoNotFound = createInfoNotFound({
    nameClass: 'fs-1 mt-4 title-pokelab -search',
    title: 'Pokémon não encontrado!',
  });
  const $infoError = createInfoError({
    nameClass: 'fs-1 mt-4 title-pokelab -error',
    title: 'Erro ao pesquisar!',
  });
  const $inputSearch = document.querySelector(`[data-input="input-search"]`);
  const $cardsWrapper = document.querySelector('#cards-wrapper');
  $cardsWrapper.remove();

  const $imagesWrapper = document.querySelector('#images-wrapper');
  const $newCardsWrapper = createCardsWrapper();
  $imagesWrapper.insertAdjacentElement('beforeend', $newCardsWrapper);

  const pokemon = $inputSearch.value;

  try {
    const cards = await getCardsPokemon(pokemon);

    if (cards.count === 0) {
      window.location.href = '#cards-wrapper';
      $inputSearch.select();
      $inputSearch.focus();
      $inputSearch.value = '';

      return $newCardsWrapper.insertAdjacentHTML('beforeend', $infoNotFound);
    }

    for (let index = 0; index < cards.count; index++) {
      const pokemon = {
        name: cards.data[index].name,
        card: cards.data[index].images.small,
        nameClass: 'card mb-3 card-pokelab',
      };

      const $cardPokemon = cardPokemon(pokemon);
      $newCardsWrapper.insertAdjacentHTML('afterbegin', $cardPokemon);
    }

    $inputSearch.value = '';

    window.location.href = '#cards-wrapper';
  } catch (err) {
    console.log(err);
    window.location.href = '#cards-wrapper';
    $inputSearch.select();
    $inputSearch.focus();
    $inputSearch.value = '';

    return $newCardsWrapper.insertAdjacentHTML('beforeend', $infoError);
  }

  $inputSearch.select();
  $inputSearch.focus();
};
