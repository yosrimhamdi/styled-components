import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --shadow: rgba(0, 0, 0, 0.2);
  }

  body {
    background-color: ${({ theme }) => theme.background}
  }
`;

export default GlobalStyles;
