import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --yellow-300: rgba(184,147,44,0.25);
  //--purple-600: #5531ff;
  //--purple-900: #150057;
  --yellow-600: #b8930c;
  --yellow-900: #f7d354;

  --font-black: #1c1c1c;
  --font-white: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px){
    font-size: 93.75%; //15px
  }
  @media (max-width: 720px ){
    font-size: 87.5% ; //14px
  }
}

`;
