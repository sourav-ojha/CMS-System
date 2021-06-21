import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { AuthProvider } from "./helper/AuthProvider";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import "./index.css";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

const user = JSON.parse(localStorage.getItem("user"));

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider value={user}>
      <App />
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);
