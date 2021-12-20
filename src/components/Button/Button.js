import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";

const ButtonUser = ({ children }) => {
  return (
    <button type="button" className={style.button}>
      {children}
    </button>
  );
};

ButtonUser.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonUser;
