import React from "react";

import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import routing from "./routing";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={routing} />
  </React.StrictMode>,
);

// ReactDOM.render(
//   // <React.StrictMode>
//     {/*<ReactRouter basename={process.env.PUBLIC_URL}>*/}
//       <RouterProvider router={routing} />
//     {/*</ReactRouter>*/}
//   // </React.StrictMode>,
//   document.querySelector("#root"),
// );

// // <React.StrictMode>
// {/*<ReactRouter basename={process.env.PUBLIC_URL}>*/}
// {/*</ReactRouter>*/}
// // </React.StrictMode>,
