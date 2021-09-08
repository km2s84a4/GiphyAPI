import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./App.css";
import App from "./App";
import rootReducer from "./reducers";

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
