import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --dark-gray: #7B7B89;
    --background: #F0F0F2;
    --medium-gray:  #e5e5e5;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body,
  input,
  button {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  button {
    cursor: pointer;
  }
`;
