const $root = document.querySelector('#root');

const $headerWrapper = createHeaderWrapper();
const $navigation = createNavigation();
const $header = createHeader();

const $mainWrapper = createMainWrapper();
const $newsletterWrapper = createNewsletterWrapper();
const $titleInfoSuccess = createInfoSuccess({
  nameClass: 'fs-1 mt-4 mb-5 title-pokelab -newsletter',
  title: 'Inscrição realizada com Sucesso!',
});

const $footer = createFooter();
const $modalNewsletter = createModalNewsLetter();

$headerWrapper.insertAdjacentHTML('beforeend', $navigation);
$headerWrapper.insertAdjacentHTML('beforeend', $header);

$mainWrapper.insertAdjacentElement('beforeend', $newsletterWrapper);
$newsletterWrapper.insertAdjacentHTML('beforeend', $titleInfoSuccess);

$root.insertAdjacentElement('beforeend', $headerWrapper);
$root.insertAdjacentElement('beforeend', $mainWrapper);
$root.insertAdjacentHTML('beforeend', $footer);
$root.insertAdjacentHTML('beforeend', $modalNewsletter);
