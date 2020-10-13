import React from "react";

export default function useCounter(defaultCount, min = 0, max) {
  const [pizzaCount, setPizzaCount] = React.useState(1);
  const decrement = () => setPizzaCount(Math.max(0, pizzaCount - 1));
  const increment = () => setPizzaCount(Math.min(pizzaCount + 1, max));

  return [pizzaCount, { increment, decrement }];
}
// ce fichier ne sert plus a rien
