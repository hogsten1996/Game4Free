import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
