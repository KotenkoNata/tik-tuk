import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeView from "./views/HomePage";
import ErrorPage from "./views/ErrorPage";
import routes from "./routes";
import Layout from "./components/Layout";
import UserView from "./views/UserView";

const routing = createBrowserRouter(
  [
    {
      path: routes.home,
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <HomeView />,
          index: true,
        },
        {
          path: routes.userProfile,
          element: <UserView />,
        },
      ],
    },
  ],
  {
    basename: `${process.env.PUBLIC_URL}`,
  },
);

export default routing;
