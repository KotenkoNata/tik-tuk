import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={style.header}>
      <nav>
        <NavLink className={style["link-logo"]} to="/" exact>
          <img className={style.logo} src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />
          <img src="https://fontmeme.com/permalink/211117/439580d4cdf5ccff3abfeae99d84338c.png" alt="TikTuk" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
