import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    &::-webkit-scrollbar{
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
      background-color: darkgray;
    }
  }
  body {
    font-family: 'Oswald', sans-serif;
    width: 100%;
  }
  h2 {
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
    color: #3d98bb;
  }
  h3 {
    font-size: 1.3rem;
    color: #333;
    padding: 1.3rem 0;
  }
  p {
    line-height: 200%;
    font-size: 1.2rem;
    color: #696969;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  img {
    display: block;
  }
`;

export default GlobalStyle;
