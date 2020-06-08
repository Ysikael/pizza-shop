import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import Header from "../Header";
import { theme } from "./theme";
import PizzaCard from "../PizzaCard";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header ShoppingCartCount={3} />
      <PizzaCard
        name="Savoyarde"
        ingredients={["Olives", "Tomates", "Reblochon"]}
        imageUrl="https://picsum.photos/350"
        price={8.99}
      />
    </ThemeProvider>
  );
}
