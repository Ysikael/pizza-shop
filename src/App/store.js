import { applyMiddleware, createStore, combineReducers } from "redux";
import pizzasReducer from "../pizzas/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

// const initialState = {};

// const rootReducer = (state = initialState, action) => ({
//     pizzas: pizzasReducer(state.pizzas, action),
// });

const rootReducer = combineReducers({
    pizzas: pizzasReducer,
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware()));