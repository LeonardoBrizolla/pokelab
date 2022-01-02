const createButtonTop = () => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');
  $style.textContent = `
    #myBtn {
      display: none;
      position: fixed;
      bottom: 20px;
      right: 30px;
      z-index: 99;
      border: none;
      outline: none;
      background-color: #bd93f9;
      cursor: pointer;
      font-family: 'Roboto Mono', monospace;
      padding: 15px;
      border-radius: 10px;
      font-size: 18px;
      color: #282a36;
      font-weight: bold;
      transition: opacity 200ms linear;
    }

    #myBtn:hover {
      opacity: 0.8;
    }
  `;
  $head.insertBefore($style, null);

  return `
    <button
      onclick="topFunction()"
      id="myBtn"
      title="Ir para o topo"
    >
      Topo
    </button>
  `;
};
