const createHeader = () => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');

  $style.textContent = `
  .header-pokelab {
    background-color: #383a59;
    padding: 120px 0 60px;
  }
  .header-pokelab > .image {
    width: 200px;
    margin-bottom: 1em;
  }

  .header-pokelab > .image.-pokemon {
    transform: translateY(-40px) translateX(40px);
    width: 100px;
    margin-bottom: 0;
  }
  .header-pokelab > .title {
    color: #bd93f9;
    font-size: 5em;
    font-family: 'Pushster', cursive;
    margin-bottom: 1.5rem;
  }

  .header-pokelab > .text {
    font-weight: 300;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.2em;

  }

  @media (max-width: 555px) {
    .header-pokelab > .text {
      font-size: 0.9rem;
    }
  }
  `;

  $head.insertBefore($style, null);

  return `
    <header class="container-fluid d-flex justify-content-center align-items-center flex-column header-pokelab text-white">
      <img src="../../../img/gengar-pokemon-header.png" alt="Logo Pokémon" class="image" />
      <img src="../../../img/logo-pokemon.svg" alt="Logo Pokémon" class="image -pokemon" />
      <h1 class="title">PokéLab</h1>
      <h3 class="text">Busque as cartas do seu Pokémon favorito</h3>
    </header>
  `;
};
