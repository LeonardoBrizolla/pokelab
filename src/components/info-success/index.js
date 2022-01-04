const createInfoSuccess = ({ nameClass, title }) => {
  const $title = createTitle({
    nameClass,
    title,
  });

  return `
      ${$title}
      <img
        src="../../../img/gengar-success.gif"
        alt="Gengar pulando feliz"
        style="border-radius: 5px"
      />
  `;
};
