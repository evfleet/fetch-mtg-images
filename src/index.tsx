import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./components/App";
import { CSSReset, theme } from "./styles";

const Root = () => (
  <>
    <CSSReset />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);

render(<Root />, document.getElementById("root"));
