const $root = document.querySelector('#root');

const $headerWrapper = createHeaderWrapper();
const $navigation = createNavigation();
const $header = createHeader();

const $mainWrapper = createMainWrapper();
const $aboutWrapper = createAboutWrapper();
const $titleAbout = createTitle({
  nameClass: 'fs-1 mt-4 title-pokelab -about',
  title: 'Sobre',
});
const $paragraphAbout = createParagraph({
  nameClass: 'paragraph-pokelab fs-5',
  text: 'Projeto desenvolvido com objetivo de consumir a API Pokémon TCG',
});
const $subtitleAboutApi = createSubtitle({
  nameClass: 'fs-3 mt-4 subtitle-pokelab -about',
  textSubtitle: 'API',
});
const $paragraphAboutApi = createParagraph({
  nameClass: 'paragraph-pokelab',
  text: `
    Link para documentação: <a class="paragraph-pokelab -action" href="https://docs.pokemontcg.io/">Pokémon TCG</a>
  `,
});
const $subtitleAboutTechs = createSubtitle({
  nameClass: 'fs-3 mt-4 subtitle-pokelab -about',
  textSubtitle: 'Techs',
});
const $paragraphAboutTechs = createParagraph({
  nameClass: 'paragraph-pokelab',
  text: `
    <ul class='paragraph-pokelab'>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Bootstrap</li>
    </ul>
  `,
});

const $subtitleAboutGithub = createSubtitle({
  nameClass: 'fs-3 mt-4 subtitle-pokelab -about',
  textSubtitle: 'Github',
});
const $paragraphAboutGithub = createParagraph({
  nameClass: 'paragraph-pokelab',
  text: `
    Link para repositório: <a class="paragraph-pokelab -action" href="https://github.com/LeonardoBrizolla/pokelab">PokéLab Repo</a>
  `,
});

const $footer = createFooter();
const $modalNewsletter = createModalNewsLetter();

$headerWrapper.insertAdjacentHTML('beforeend', $navigation);
$headerWrapper.insertAdjacentHTML('beforeend', $header);

$mainWrapper.insertAdjacentElement('beforeend', $aboutWrapper);
$aboutWrapper.insertAdjacentHTML('beforeend', $titleAbout);
$aboutWrapper.insertAdjacentHTML('beforeend', $paragraphAbout);
$aboutWrapper.insertAdjacentHTML('beforeend', $subtitleAboutApi);
$aboutWrapper.insertAdjacentHTML('beforeend', $paragraphAboutApi);
$aboutWrapper.insertAdjacentHTML('beforeend', $subtitleAboutTechs);
$aboutWrapper.insertAdjacentHTML('beforeend', $paragraphAboutTechs);
$aboutWrapper.insertAdjacentHTML('beforeend', $subtitleAboutGithub);
$aboutWrapper.insertAdjacentHTML('beforeend', $paragraphAboutGithub);

$root.insertAdjacentElement('beforeend', $headerWrapper);
$root.insertAdjacentElement('beforeend', $mainWrapper);
$root.insertAdjacentHTML('beforeend', $footer);
$root.insertAdjacentHTML('beforeend', $modalNewsletter);
