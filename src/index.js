import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
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
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
