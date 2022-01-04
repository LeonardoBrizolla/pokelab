const getCardsPokemon = async (pokemon) => {
  const response = await fetch(
    `https://api.pokemontcg.io/v2/cards?q=name:${pokemon}&orderBy=releaseDate`
  );
  if (response.ok === true) {
    return response.json();
  } else {
    throw new Error('Erro API');
  }
};

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
