const createNavigation = () => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');

  $style.textContent = `
    .navigation-pokelab {
      -webkit-box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);
      box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);
      background-color: #282a36;
    }

    .navigation-pokelab .title {
      font-family: 'Pushster', cursive;
      font-size: 1.7em;
    }

    .navigation-pokelab .nav-link {
      font-family: 'Roboto Mono', monospace;
    }

    .navigation-pokelab .nav-item {
      margin-left: 10px;
    }

    .navigation-pokelab .highlighted-pokelab {
      background-color: #50fa7b;
      border-radius: 9px;
      transition: opacity 200ms linear;
      cursor: pointer;
    }

    .navigation-pokelab .highlighted-pokelab:hover {
      opacity: 0.8;
    }

    .navigation-pokelab .nav-link.-pokelab {
      color: black;
    }

    .navigation-pokelab .nav-link.-pokelab:hover {
      color: black;
    }

    @media (max-width: 991px) {
      .navigation-pokelab .highlighted-pokelab {
        background-color: transparent;
        border-radius: 0;
        transition: none;
      }

      .navigation-pokelab .nav-link.-pokelab {
        color: #50fa7b;
      }

      .navigation-pokelab .nav-link.-pokelab:hover {
        color: #50fa7b;
      }
    }
  `;

  $head.insertBefore($style, null);

  return `
  <nav class="navbar navbar-expand-lg navbar-dark top-bar fixed-top navigation-pokelab">
    <div class="container-fluid">
      <a class="navbar-brand h1 title" href="/">PokéLab</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end collapse-pokelab" id="navbarNav">
        <ul class="navbar-nav fs-5">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Buscar</a>
          </li>
          <li class="nav-item highlighted-pokelab">
            <a
              class="nav-link -pokelab"
              data-nav="btn-newsletter"
              data-bs-toggle="modal"
              data-bs-target="#newsletterModal"
              onClick="handleClickNewsletter()"
              >
                News Letter &#10024
              </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;
};
