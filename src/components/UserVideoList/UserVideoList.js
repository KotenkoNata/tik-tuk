import React from "react";
import PropTypes from "prop-types";

import style from "./UserVideoList.module.css";

const UserVideoList = ({ children }) => {
  return <ul className={style.list}>{children}</ul>;
};

UserVideoList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserVideoList;
