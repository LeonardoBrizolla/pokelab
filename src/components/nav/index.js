const createNavigation = () => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');

  $style.textContent = `

  `;

  $head.insertBefore($style, null);

  return `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark top-bar fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PokéLab</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle
      navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Busca</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">NewsLetter</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sobre</a>
        </li>
      </ul>
    </div>
  </div>
  </nav>
`;
};
