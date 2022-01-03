const createInput = ({
  type,
  placeholder,
  dataAttribute,
  nameClass,
  spellcheck,
  pattern,
  isRequired,
}) => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');
  $style.textContent = `
  .input-pokelab.form-control {
    background-color: #383a59;
  }

  .input-pokelab.form-control:focus {
    background-color: #383a59;
  }

  .input-pokelab.-search {
    border: solid 2px #bd93f9;
  }

  .input-pokelab.-search.form-control {
    color: #bd93f9;
  }

  .input-pokelab.-search.form-control:focus {
    color: #bd93f9;
    border-color: #bd93f9;
    box-shadow: 0 0 0 0.25rem rgba(189, 147, 249, 0.25);
  }

  .input-pokelab.-newsletter {
    border: solid 2px #50fa7b;
  }

  .input-pokelab.-newsletter.form-control {
    color: #50fa7b;
  }

  .input-pokelab.-newsletter.form-control:focus {
    color: #50fa7b;
    border-color: #50fa7b;
    box-shadow: 0 0 0 0.25rem rgba(80, 250, 123, 0.5);
  }

  @media (min-width: 700px) {
    .input-pokelab {
      width: 50%;
    }
  }
  `;
  $head.insertBefore($style, null);

  return `
  <input
    type="${type}"
    placeholder="${placeholder}"
    data-input="${dataAttribute}"
    class="${nameClass}"
    spellcheck="${spellcheck}"
    pattern="${pattern}"
    required=${isRequired}
  />
`;
};
