import React from "react";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => (
  <Loader
    type="ThreeDots"
    color="#303f9f"
    height={50}
    width={50}
    className="loader"
    margin="20 auto"
    text-align="center"
  />
);

export default Loading;
