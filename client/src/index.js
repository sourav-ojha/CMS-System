import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { AuthProvider } from "./helper/AuthProvider";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import "./index.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const user = JSON.parse(localStorage.getItem("user"));

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider value={user}>
      <App />
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);
