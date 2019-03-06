import { createGlobalStyle } from "./themed-styled";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${({ theme }) => theme.fonts.body.family};
    font-size: 100%;
  }
`;

export default GlobalStyle;
