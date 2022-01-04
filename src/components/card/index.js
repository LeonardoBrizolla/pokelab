const createCard = () => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');
  $style.textContent = `
    .card-pokelab {
      min-width: 300px;
      max-height: 400px;
      background-color: #282a36;
      transition: transform 200ms linear;
    }

    .card-pokelab:hover {
      transform: scale(1.1);
      z-index: 1;
    }
  `;
  $head.insertBefore($style, null);

  return ({ name, card, nameClass }) => `
    <img
      src="${card}"
      alt="Card ${name}"
      class="${nameClass}"
    />
  `;
};
