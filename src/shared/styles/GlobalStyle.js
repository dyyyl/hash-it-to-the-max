import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Lato|Work+Sans:500');
  * {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-size: 62.5%;
  }

  body {
    margin: 0;
  }

  h1 {
    font-family: 'Work Sans', sans-serif;
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 2px;
    margin: 0;
    color: #3A3A3A;
  }

  h2 {
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    letter-spacing: 2px;
    color: #3A3A3A;
  }

  h3,h4,h5,h6,p,span,a,input,label,button,td,th {
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    color: #3A3A3A;
  }
`;

export default GlobalStyle;
