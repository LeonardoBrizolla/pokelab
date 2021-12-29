async function getPokemon(pokemon) {
  await fetch(`https://api.pokemontcg.io/v1/cards?name=${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      for (let index = 0; index < data.cards.length; index++) {
        const $card = document.createElement('img');
        const $wrapCards = document.querySelector(`[data-wrap="wrap-cards"]`);

        $card.classList.add('card');
        $card.classList.add('-pokelab');
        $card.classList.add('p-3');
        $card.src = data.cards[index].imageUrlHiRes;
        $wrapCards.insertBefore($card, null);
      }
    });
}
