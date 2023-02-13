import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navigation from "../Navigation";

import Footer from "../Footer";

const Layout = () => {
  return (
    <Container>
      <Navigation />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
