const handleClickButtonSubscribe = async (event) => {
  event.preventDefault();
  const $inputEmailNewsletter = document.querySelector(
    `[data-search="input-newsletter"]`
  );
  const emailText = $inputEmailNewsletter.value;

  const email = {
    email: emailText,
  };

  await postEmailNewsletter(
    'https://prog-bolsas-api.herokuapp.com/',
    email
  ).then((data) => {
    console.log(data.success);
    if (data.success) {
      window.location.href = '../../newsletter-success-200.html';
    } else {
      window.location.href = '../../newsletter-error-404.html';
    }
  });
};
