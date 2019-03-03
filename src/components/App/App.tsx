import React, { useState } from "react";
import JSZip from "jszip";

import { AddCardFunc, Card } from "../../types";

import List from "../List";
import TextInput from "../TextInput";
import { Container } from "./styles";

const App = () => {
  const [zip, setZip] = useState<JSZip>(new JSZip());
  const [cards, setCards] = useState<Card[]>([]);

  const addCard: AddCardFunc = (card) => {};

  return (
    <Container>
      <p>Hello World</p>

      <TextInput addCard={addCard} />

      <List cards={cards} />
    </Container>
  );
};

export default App;
