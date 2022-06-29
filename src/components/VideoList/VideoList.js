import React from "react";
import PropTypes from "prop-types";

import style from "./VideoList.module.css";

const VideoList = ({ children }) => {
  return <ul className={style.videoList}>{children}</ul>;
};

VideoList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VideoList;
