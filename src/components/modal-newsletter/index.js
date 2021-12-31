const createModalNewsLetter = () => {
  const $inputSearch = createInputSearch({
    type: 'text',
    placeholder: 'E-mail',
    dataAttribute: 'input-newsletter',
    nameClass: 'form-control p-2 mb-3 search-pokelab w-100',
    spellcheck: 'false',
  });
  const $buttonNewsletter = createButtonSearch({
    nameClass: 'btn btn-primary button-newsletter',
    type: 'submit',
    dataAttribute: 'button-newsletter',
    onClick: '',
    textContent: 'Inscrever-se',
  });

  const $head = document.querySelector('head');
  const $style = document.createElement('style');
  $style.textContent = `
    .newsletter-modal .-wrapper {
      background-color: #282a36;
    }

    .newsletter-modal .-header {
      border: none;
    }

    .newsletter-modal .-title {
      color: #50fa7b;
      font-family: 'Pushster', cursive;
      font-size: 3em;
    }

    .newsletter-modal .-subtitle {
      color: #fff;
      font-family: 'Roboto mono', sans-serif;
      font-size: 1em;
    }

    .newsletter-modal .-footer {
      border: none;
    }
  `;
  $head.insertBefore($style, null);

  return `
    <!-- Modal -->
    <div
      class="modal fade newsletter-modal -screen"
      id="newsletterModal"
      tabindex="-1"
      aria-labelledby="newsletterModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog ">
        <div class="modal-content -wrapper">
          <div
            class="
              modal-header
              d-flex
              justify-content-center
              align-items-center
              flex-column
              -header
              "
          >
            <h5
              class="modal-title -title"
              id="newsletterModalLabel"
            >
              News Letter
            </h5>
            <h6 class="-subtitle">Inscreva-se para receber as novidades</h6>
          </div>
          <div class="modal-body">
            ${$inputSearch}
          </div>
          <div class="modal-footer -footer d-flex justify-content-center
          align-items-center">
            ${$buttonNewsletter}
          </div>
        </div>
      </div>
    </div>
  `;
};
