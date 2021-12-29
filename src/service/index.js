async function getCardPokemon(pokemon) {
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

        const $cardPokemon = createCard(pokemon);

        $cardsWrapper.insertAdjacentHTML('beforeend', $cardPokemon);
      }
    });
}
