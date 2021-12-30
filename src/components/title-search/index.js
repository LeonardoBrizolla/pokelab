const createTitleSearch = ({ title }) => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');

  $style.textContent = `
		h1.-pokelab {
			font-family: 'Roboto Slab', serif;
			color: #ff79c6;
		}
  `;

  $head.insertBefore($style, null);

  return `
		<h1 class="-pokelab fs-1 mt-4 ">${title}</h1>
	`;
};
