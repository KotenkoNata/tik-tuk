import React from "react";

import style from "./VideoList.module.css";

const VideoList = ({ children }) => {
  return (
    <>
      <ul className={style.videoList}>{children}</ul>
    </>
  );
};

export default VideoList;
