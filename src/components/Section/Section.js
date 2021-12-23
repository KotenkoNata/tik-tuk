import React from "react";
import PropTypes from "prop-types";
import Container from "../Container/Container";

const Section = ({ children }) => (
  <section>
    <Container>{children}</Container>
  </section>
);

Section.propTypes = {
  children: PropTypes.node,
};

Section.defaultProps = {
  children: <span>ERROR</span>,
};

export default Section;
