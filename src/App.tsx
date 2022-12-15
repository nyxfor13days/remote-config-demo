import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import RootRouter from "./routes";
import GlobalStyles from "./stylesheets/GlobalStyles";
import { theme } from "./stylesheets/theme";

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={RootRouter} />
      </Suspense>

      <GlobalStyles />
    </ThemeProvider>
  );
};
