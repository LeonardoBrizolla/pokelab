const handleClickTopButton = () => {
  buttonTop = document.querySelector('#myBtn');

  window.onscroll = () => {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      buttonTop.style.display = 'block';
    } else {
      buttonTop.style.display = 'none';
    }
  };

  return () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
};

const topFunction = handleClickTopButton();
