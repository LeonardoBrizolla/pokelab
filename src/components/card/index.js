const card = () => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');
  $style.textContent = `
    .card.-pokelab {
      min-width: 300px;
      max-height: 400px;
      border: none;
      background-color: #383a59;
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
