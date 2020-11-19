import React from "react";
import { useList } from "react-use";
import Screen from "../Screen";
import Cart from "../Cart";


export default function CartScreen() {
  const [cart] = useList([
  ]);

  return (
    <Screen>
      <Cart cart={cart} />
    </Screen>
  );
}
