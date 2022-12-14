import { ThemeProvider } from "styled-components";
import GlobalStyles from "./stylesheets/GlobalStyles";
import { theme } from "./stylesheets/theme";

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      App
    </ThemeProvider>
  );
};
