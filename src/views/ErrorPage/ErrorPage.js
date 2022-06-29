import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return <h1 id="error-page">{error.statusText || error.message}</h1>;
};

export default ErrorPage;
