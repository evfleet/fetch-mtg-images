// tslint:disable:no-duplicate-imports
import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import { Theme } from "./theme";

const {
  default: styled,
  createGlobalStyle,
  css,
  keyframes,
  ThemeConsumer,
  ThemeProvider
} = (styledComponents as any) as ThemedStyledComponentsModule<Theme>;

export { createGlobalStyle, css, keyframes, ThemeConsumer, ThemeProvider };
export default styled;
