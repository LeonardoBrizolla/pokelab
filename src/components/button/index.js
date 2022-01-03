const createButton = ({
  nameClass,
  type,
  dataAttribute,
  onClick,
  textContent,
}) => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');
  $style.textContent = `
    .button-pokelab.btn-primary {
      color: #282a36;
      font-weight: bold;
      font-family: 'Roboto Mono', monospace;
      transition: box-shadow 200ms linear;
    }

    .button-pokelab.btn-primary:hover {
      opacity: 0.9;
    }

    .button-pokelab.-search.btn-primary {
      background-color: #bd93f9;
      border-color: #bd93f9;
    }

    .button-pokelab.-search.btn-primary:focus {
      box-shadow: 0 0 0 0.25rem rgba(189, 147, 249, 0.5);
    }

    .button-pokelab.-newsletter.btn-primary {
      font-size: 1.5em;
      background-color: #50fa7b;
      border-color: #50fa7b;
    }

    .button-pokelab.-newsletter.btn-primary:focus {
      box-shadow: 0 0 0 0.25rem rgba(80, 250, 123, 0.5);
    }
  `;
  $head.insertBefore($style, null);

  return `
    <button
      class="${nameClass}"
      type="${type}"
      data-button="${dataAttribute}"
      onClick="${onClick}"
    >
      ${textContent}
    </button>
  `;
};
