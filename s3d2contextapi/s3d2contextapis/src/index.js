import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {CartContextProvider} from "./contexts/CartContext"

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
    <App />
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);