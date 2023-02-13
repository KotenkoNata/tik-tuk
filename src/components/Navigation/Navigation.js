import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={style.header}>
      <nav>
        <NavLink className={style.link} end="true" to="/">
          <Logo />
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
