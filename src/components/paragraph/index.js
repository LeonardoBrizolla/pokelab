const createParagraph = ({ nameClass, text }) => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');

  $style.textContent = `
    .paragraph-pokelab {
      font-family: 'roboto mono', sans-serif;
      color: #f2f2f2;
    }

    .paragraph-pokelab.-action {
      font-family: 'roboto mono', sans-serif;
      color: #ff79c6;
    }
  `;
  $head.insertBefore($style, null);

  return `
		<p class="${nameClass} ">
      ${text}
    </p>
	`;
};
