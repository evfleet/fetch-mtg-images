import React, { useState } from "react";
import JSZip from "jszip";

import { Card, UpdateCardsFunc } from "../../types";

import List from "../List";
import TextInput from "../TextInput";
import { Container } from "./styles";

import { formatName } from "../../utils";

const App = () => {
  const [zip, setZip] = useState<JSZip>(new JSZip());
  const [cards, setCards] = useState<Card[]>([]);

  const updateCards: UpdateCardsFunc = (card) => {};

  return (
    <Container>
      <p>Hello World</p>

      <TextInput updateCards={updateCards} />

      <List cards={cards} />
    </Container>
  );
};

export default App;
