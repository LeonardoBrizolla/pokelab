const handleClickSubscribe = async (event) => {
  event.preventDefault();
  const $inputEmailNewsletter = document.querySelector(
    `[data-input="input-newsletter"]`
  );
  const emailText = $inputEmailNewsletter.value;

  const email = {
    email: emailText,
  };

  try {
    const data = await postEmailNewsletter(
      'https://prog-bolsas-api.herokuapp.com/',
      email
    );

    if (data.success) {
      window.location.href = '../../newsletter-success.html';
    } else {
      throw new Error('Erro API');
    }
  } catch (err) {
    console.log(err);
    window.location.href = '../../newsletter-error.html';
  }
};
