const createInputSearch = ({ type, placeholder, dataAttribute, nameClass }) => `
  <input
    type="${type}"
    placeholder="${placeholder}"
    data-search="${dataAttribute}"
    class="${nameClass}"
  />
`;
