const createTitle = ({ nameClass, title }) => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');

  $style.textContent = `
    .title-pokelab {
      font-family: 'Pushster', cursive
    }

		.title-pokelab.-search {
			color: #bd93f9;
		}

    .title-pokelab.-newsletter {
			color: #50fa7b;
		}
  `;
  $head.insertBefore($style, null);

  return `
		<h1 class="${nameClass} ">
      ${title}
    </h1>
	`;
};
