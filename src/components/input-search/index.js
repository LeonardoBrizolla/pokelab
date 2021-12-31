const createInputSearch = ({
  type,
  placeholder,
  dataAttribute,
  nameClass,
  spellcheck,
}) => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');
  $style.textContent = `
  .search-pokelab {
    border: solid 2px #bd93f9;
  }

  .search-pokelab.form-control {
    background-color: #383a59;
    color: #bd93f9;
  }

  .search-pokelab.form-control:focus {
    color: #bd93f9;
    background-color: #383a59;
    border-color: #bd93f9;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(189, 147, 249, 0.25);
  }

  @media (min-width: 700px) {
    .search-pokelab {
      width: 50%;
    }
  }
  `;
  $head.insertBefore($style, null);

  return `
  <input
    type="${type}"
    placeholder="${placeholder}"
    data-search="${dataAttribute}"
    class="${nameClass}"
    spellcheck="${spellcheck}"
  />
`;
};
