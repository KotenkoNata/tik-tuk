import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeView from "./views/HomePage";
import ErrorPage from "./views/ErrorPage";

const routing = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeView />,
      errorElement: <ErrorPage />,
    },
    // {
    //   path: "/user/:name",
    //   element: <UserView />,
    // },
  ],
  {
    basename: `${process.env.PUBLIC_URL}`,
  },
);

export default routing;
