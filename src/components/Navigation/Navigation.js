import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={style.header}>
      <nav>
        <Link className={style.link} end="true" to="/">
          <Logo />
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
