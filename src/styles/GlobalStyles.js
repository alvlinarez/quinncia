import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    height: 100%;
    font-size: 62.5%;
  }
  body {
    min-height: 100%;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
  }
`;
