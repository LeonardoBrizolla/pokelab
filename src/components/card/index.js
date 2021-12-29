function createCard({ name, card, nameClass }) {
  const $card = `
    <img
      src="${card}"
      alt="Card ${name}"
      class="${nameClass}"
    />
  `;

  return $card;
}
