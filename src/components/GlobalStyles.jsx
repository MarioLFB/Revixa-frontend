import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(90deg, #FF7F50, #FFA500);
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
