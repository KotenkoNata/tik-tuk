import React from "react";
import PropTypes from "prop-types";

import styles from "./Container.module.css";

const Container = ({ children }) => <div className={styles.Container}>{children}</div>;

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: <span>ERROR</span>,
};

export default Container;
