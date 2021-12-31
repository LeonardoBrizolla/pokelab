const createButtonSearch = ({
  nameClass,
  type,
  dataAttribute,
  onClick,
  textContent,
}) => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');
  $style.textContent = `
  .button-search.btn-primary {
    color: #282a36;
    font-weight: bold;
    background-color: #bd93f9;
    border-color: #bd93f9;
    font-family: 'Roboto Mono', monospace;
    transition: box-shadow 200ms linear;
  }

  .button-search.btn-primary:hover {
    opacity: 0.9;
  }

  .button-search.btn-primary:focus {
    box-shadow: 0 0 0 0.25rem rgba(189, 147, 249, 0.5);
  }
  `;
  $head.insertBefore($style, null);

  return `
    <button
      class="${nameClass}"
      type="${type}"
      data-search="${dataAttribute}"
      onClick="${onClick}"
    >
      ${textContent}
    </button>
`;
};
