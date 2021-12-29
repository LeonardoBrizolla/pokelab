async function getCardPokemon(pokemon) {
  await fetch(`https://api.pokemontcg.io/v1/cards?name=${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      for (let index = 0; index < data.cards.length; index++) {
        const $cardsWrapper = document.querySelector(
          '[data-wrapper="cards-wrapper"]'
        );

        const imageUrlCard = data.cards[index].imageUrlHiRes;

        const $card = createCard(imageUrlCard);

        $cardsWrapper.insertAdjacentHTML('beforeend', $card);
      }
    });
}
