import React from "react";

import GithubIcon from "./components/GithubIcon";
import { Container, Link } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Link href="https://github.com/evfleet/fetch-mtg-images/" target="_blank">
        <GithubIcon />
      </Link>
    </Container>
  );
};

export default Footer;
