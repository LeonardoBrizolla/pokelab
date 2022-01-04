const createTitle = ({ nameClass, title }) => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');

  $style.textContent = `
    .title-pokelab {
      font-family: 'Pushster', cursive
    }

		.title-pokelab.-search {
			color: #bd93f9;
      font-size: 4em;
      margin-bottom: 2rem;
		}

    .title-pokelab.-newsletter {
			color: #50fa7b;
		}

    .title-pokelab.-error {
			color: #ff5555;
		}

    .title-pokelab.-about {
			color: #ff79c6;
		}
  `;
  $head.insertBefore($style, null);

  return `
		<h1 class="${nameClass} ">
      ${title}
    </h1>
	`;
};
