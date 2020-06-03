import React from "react";

import Header from "../Header";
import { theme } from "./theme";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header ShoppingCartCount={3} />
    </ThemeProvider>
  );
}
