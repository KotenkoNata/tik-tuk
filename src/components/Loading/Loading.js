/* eslint-disable react/jsx-no-literals */
import React from "react";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => (
  <Loader
    className="loader"
    color="#fe2c55"
    height={70}
    margin="20 auto"
    text-align="center"
    type="ThreeDots"
    width={70}
  />
);

export default Loading;
