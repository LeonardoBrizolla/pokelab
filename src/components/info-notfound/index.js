const createInfoNotFound = () => {
  const $title = createTitle({
    nameClass: 'fs-1 mt-4 title-pokelab -search',
    title: 'Pokémon não encontrado!',
  });

  return `
    <div class="d-flex flex-column align-items-center justify-content-center">
      ${$title}
      <img src="../../../img/gastly.gif" alt="Gastly gif"  width="200" />
    </div>
  `;
};
