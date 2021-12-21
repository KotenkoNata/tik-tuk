import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as ReactRouter } from "react-router-dom";
import App from "./App";

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter basename={process.env.PUBLIC_URL}>
      <App />
    </ReactRouter>
  </React.StrictMode>,
  document.querySelector("#root"),
);
