import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --shadow: rgba(0, 0, 0, 0.2);
  }

  body {
    background-color: ${({ theme }) => theme.background};
    padding: 2em;
  }
`;

export default GlobalStyles;
