const createHeader = () => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');

  $style.textContent = `
  header.-pokelab {
    background-color: #383a59;
    padding: 120px 0 80px;
  }
  .-pokelab > img {
    width: 200px;
    margin-bottom: 1.2em;
  }
  .-pokelab > h1 {
    color: #ff79c6;
    font-size: 72px;
    font-family: 'Roboto Slab', serif;
  }
  `;

  $head.insertBefore($style, null);

  return `
    <header class="container-fluid d-flex justify-content-center align-items-center flex-column -pokelab text-white">
      <img src="../../../img/logo-pokemon.svg" alt="Logo Pokémon" />
      <h1>PokéLab</h1>
      <h2 class="fs-3 display-3">Busque as cartas do seu Pokémon favorito</h2>
    </header>
  `;
};
