import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";


import { Provider } from "react-redux";
import store from "./store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Provider store={store}>
      <Main />
    </Provider>
  </Router>
);
