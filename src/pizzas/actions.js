export const INIT_PIZZAS = "INIT_PIZZAS";

export const initPizzas = (pizzas) => ({
    type: "INIT_PIZZAS",
    payload: { pizzas },
});

// export const addToBasket = (id) => ({
//     type: "ADD_PIZZAS_TO_BASKET",
//     payload: { id },
// });