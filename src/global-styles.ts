import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
:root{
  --theme-blue: hsl(213, 96%, 18%);
  --theme-bg: hsl(217, 100%, 97%);
  --purple: hsl(243, 100%, 62%);
  --light-grey: hsl(231, 100%, 99%);
  --grey: hsl(231, 11%, 63%);
  --component-width: 40rem;
  @media screen and (max-width: 997px){
    --component-width: 100vw;
  }
}
@font-face {
  font-family: 'ubuntu-Bold';
  src: url(/assets/fonts/Ubuntu-Bold.ttf) format('truetype');
}
@font-face {
  font-family: 'ubuntu-medium';
  src: url(/assets/fonts/Ubuntu-Medium.ttf) format('truetype');;
}
@font-face {
  font-family: 'ubuntu-regular';
  src: url(/assets/fonts/Ubuntu-Regular.ttf) format('truetype');;
}
  body {
    background-color: var(--theme-bg);
    margin: 0;
    padding: 0;
  }
`;
 
export default GlobalStyle;