import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import RootRouter from "./routes";
import GlobalStyles from "./stylesheets/GlobalStyles";
import { theme } from "./stylesheets/theme";
import { Suspense } from "react";

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={RootRouter} />
      </Suspense>
    </ThemeProvider>
  );
};
