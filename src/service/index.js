async function getCardPokemon(pokemon) {
  const createPokemon = card();
  // V1: https://api.pokemontcg.io/v1/cards?name=${pokemon}
  // V2: https://api.pokemontcg.io/v2/cards?q=name:${pokemon}

  const url = `https://api.pokemontcg.io/v2/cards?q=name:${pokemon}&orderBy=releaseDate`;

  await fetch(url).then((response) => {
    response.json().then((cards) => {
      if (response.ok === true) {
        for (let index = 0; index < cards.count; index++) {
          const $cardsWrapper = document.querySelector(
            '[data-wrapper="cards-wrapper"]'
          );

          const pokemon = {
            name: cards.data[index].name,
            card: cards.data[index].images.small,
            nameClass: 'card mb-3 card-pokelab',
          };

          const $cardPokemon = createPokemon(pokemon);

          $cardsWrapper.insertAdjacentHTML('afterbegin', $cardPokemon);
        }
      } else {
        throw new Error('Erro API');
      }
    });
  });
}

const postEmailNewsletter = async (url, email) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(email),
  });
  return response.json();
};
