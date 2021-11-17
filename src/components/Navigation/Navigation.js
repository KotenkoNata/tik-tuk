import React from "react";
import routes from "../../routes";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <header className={style["header"]}>
        <nav>
          <NavLink className={style["link-logo"]} to="/" exact>
            <img className={style["logo"]} src="/images/logo.png" alt="Logo" />
            <img
              src="https://fontmeme.com/permalink/211117/439580d4cdf5ccff3abfeae99d84338c.png"
              alt="TikTuk"
            />
          </NavLink>
        </nav>
      </header>
    </>
    // <Nav variant={'tabs'} defaultActiveKey={'home'}>
    //     <Nav.Item>
    //         <Nav.Link eventKey={'home'} as={RouterLink} to={routes.home}>Home</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //         <Nav.Link eventKey={'userProfile'} as={RouterLink} to={routes.userProfile}>User profile</Nav.Link>
    //     </Nav.Item>
    // </Nav>
  );
};

export default Navigation;
