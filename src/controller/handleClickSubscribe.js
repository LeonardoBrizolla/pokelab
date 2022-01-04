const handleClickSubscribe = async (event) => {
  event.preventDefault();
  const $inputEmailNewsletter = document.querySelector(
    `[data-input="input-newsletter"]`
  );
  const emailText = $inputEmailNewsletter.value;

  const email = {
    email: emailText,
  };

  await postEmailNewsletter(
    'https://prog-bolsas-api.herokuapp.com/',
    email
  ).then((data) => {
    if (data.success) {
      window.location.href = '../../newsletter-success.html';
    } else {
      window.location.href = '../../newsletter-error.html';
    }
  });
};
