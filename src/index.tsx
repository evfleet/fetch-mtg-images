import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "./styles/themed-styled";

import App from "./components/App";
import { CSSReset, GlobalStyle, theme } from "./styles";

const Root = () => (
  <>
    <CSSReset />
    <GlobalStyle theme={theme} />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);

render(<Root />, document.getElementById("root"));
