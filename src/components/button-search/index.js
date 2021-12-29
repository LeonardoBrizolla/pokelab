const createButtonSearch = ({
  nameClass,
  type,
  dataAttribute,
  onClick,
  textContent,
}) => `
  <button
    class="${nameClass}"
    type="${type}"
    data-search="${dataAttribute}"
    onClick="${onClick}"
  >
    ${textContent}
  </button>
`;
