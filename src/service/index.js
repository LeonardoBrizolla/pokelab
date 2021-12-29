async function getCardPokemon(pokemon) {
  const createPokemon = card();

  await fetch(`https://api.pokemontcg.io/v1/cards?name=${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      for (let index = 0; index < data.cards.length; index++) {
        const $cardsWrapper = document.querySelector(
          '[data-wrapper="cards-wrapper"]'
        );

        const pokemon = {
          name: data.cards[index].name,
          card: data.cards[index].imageUrlHiRes,
          nameClass: 'card -pokelab p-3',
        };

        const $cardPokemon = createPokemon(pokemon);

        $cardsWrapper.insertAdjacentHTML('beforeend', $cardPokemon);
      }
    });
}
