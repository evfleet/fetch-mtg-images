import React from "react";

import { Container, Image } from "./styles";

interface CardViewerProps {
  viewing: null | string;
}

const CardViewer: React.SFC<CardViewerProps> = ({ viewing }) => {
  return <Container>{viewing && <Image src={viewing} />}</Container>;
};

export default CardViewer;
