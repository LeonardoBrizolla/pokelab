const createSubtitle = ({ nameClass, textSubtitle }) => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');

  $style.textContent = `
    .subtitle-pokelab {
      font-family: 'Pushster', cursive;
    }

		.subtitle-pokelab.-about {
			color: #ff79c6;
		}
  `;
  $head.insertBefore($style, null);

  return `
		<h2 class="${nameClass} ">
      ${textSubtitle}
    </h2>
	`;
};
