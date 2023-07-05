import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import store from "./storereducer/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
