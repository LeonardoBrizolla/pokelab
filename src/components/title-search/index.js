const createTitleSearch = ({ title }) => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');

  $style.textContent = `
		.title-search {
			font-family: 'Pushster', cursive;
			color: #bd93f9;
		}
  `;

  $head.insertBefore($style, null);

  return `
		<h1 class="title-search fs-1 mt-4 ">${title}</h1>
	`;
};
