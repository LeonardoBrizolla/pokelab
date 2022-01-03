const createModalNewsLetter = () => {
  const $inputNewsletter = createInput({
    type: 'text',
    placeholder: 'E-mail',
    dataAttribute: 'input-newsletter',
    nameClass: 'form-control p-2 mb-3 w-100 input-pokelab -newsletter',
    spellcheck: 'false',
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
    isRequired: true,
  });
  const $buttonNewsletter = createButton({
    nameClass: 'btn btn-primary button-pokelab -newsletter',
    type: 'submit',
    dataAttribute: 'button-newsletter',
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
      <div class="modal-dialog">
        <form class="modal-content -wrapper" method="GET" onSubmit="handleClickSubscribe(event)">
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
            ${$inputNewsletter}
          </div>
          <div class="modal-footer -footer d-flex justify-content-center
          align-items-center">
            ${$buttonNewsletter}
          </div>
        </form>
      </div>
    </div>
  `;
};
