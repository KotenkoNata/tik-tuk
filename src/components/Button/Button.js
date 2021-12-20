import React from "react";
import style from "./Button.module.css";

const ButtonUser = ({ children }) => {
  return <button className={style.button}>{children}</button>;
};

export default ButtonUser;
