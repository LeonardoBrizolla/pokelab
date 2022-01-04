const handleClickTopButton = () => {
  const $buttonTop = document.querySelector('#myBtn');
  const $inputSearch = document.querySelector(`[data-input="input-search"]`);

  window.onscroll = () => {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      $buttonTop.style.display = 'block';
    } else {
      $buttonTop.style.display = 'none';
    }
  };

  $inputSearch.select();
  $inputSearch.focus();

  return () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $inputSearch.select();
    $inputSearch.focus();
  };
};

const topFunction = handleClickTopButton();
