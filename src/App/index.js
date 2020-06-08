import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import Header from "../Header";
import { theme } from "./theme";
import PizzaList from "../PizzaList";
import db from "../db.json";

export default function App() {
  const pizzas = db.pizzas;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header ShoppingCartCount={3} />
      <PizzaList data={pizzas} />
    </ThemeProvider>
  );
}
