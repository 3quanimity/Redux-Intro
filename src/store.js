import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducers/user-reducer";
import { productsReducer } from "./reducers/products-reducer";

//Combining reducers
const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer
});

//Creating an initial State
const initialState = {
  user: "Mostfa",
  products: ["phone", "sbadri", "klasset"]
};

//Creating a Store
export default createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
