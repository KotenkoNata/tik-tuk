import React from "react";
import styles from "./Section.module.css";
import Container from "../Container/Container";

const Section = ({ children }) => (
  <section className={styles.section}>
    <Container>{children}</Container>
  </section>
);

export default Section;
