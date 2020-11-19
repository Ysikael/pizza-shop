import CartScreen from "../CartScreen";
import PizzaListScreen from "../PizzaListScreen/component";

export default {
  home:
    {
    path: "/",
    component: PizzaListScreen,
  },
  cart: {
    path: "/cart",
    component: CartScreen,
  },
};
