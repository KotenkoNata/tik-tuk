import React from "react";
import style from "./UserVideoList.module.css";

const UserVideoList = ({ children }) => {
  return (
    <>
      <ul className={style["video-list"]}>{children}</ul>
    </>
  );
};

export default UserVideoList;
