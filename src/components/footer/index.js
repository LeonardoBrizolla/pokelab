const createFooter = () => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');
  $style.textContent = `
    .footer-action-pokelab {
      text-decoration: none;
      color: #50fa7b;
    }

    .footer-action-pokelab:hover {
      text-decoration: none;
      color: #ffb86c;
    }

    footer p {
      font-family: 'Roboto Mono', monospace;
    }
  `;
  $head.insertBefore($style, null);

  return `
  <div class="container-fluid bg-dark pt-5 pb-5 mt-5">
    <footer class="d-flex justify-content-center  align-items-center py-3">
      <p class=" mb-0 text-muted"> Made with ♥ by <a href="https://github.com/leonardobrizolla" class="footer-action-pokelab">Leonardo Brizolla</a></p>
    </footer>
  </div>
`;
};
