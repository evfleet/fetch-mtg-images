import { createGlobalStyle } from "./themed-styled";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${({ theme }) => theme.fonts.body}
    font-size: 100%;
  }
`;

export default GlobalStyle;
