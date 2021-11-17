import React from "react";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => (
  <Loader
    type="ThreeDots"
    color="#fe2c55"
    height={70}
    width={70}
    className="loader"
    margin="20 auto"
    text-align="center"
  />
);

export default Loading;
