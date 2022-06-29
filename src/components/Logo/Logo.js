import React from "react";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={style.logoContainer}>
      <img alt="Logo" className={style.logo} src={`${process.env.PUBLIC_URL}/images/logo.png`} />
      <img alt="TikTuk" src="https://fontmeme.com/permalink/211117/439580d4cdf5ccff3abfeae99d84338c.png" />
    </div>
  );
};

export default Logo;
