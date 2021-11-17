import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as ReactRouter } from "react-router-dom";

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter basename={process.env.PUBLIC_URL}>
      <App />
    </ReactRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
