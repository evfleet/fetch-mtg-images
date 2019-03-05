import React, { useState } from "react";
import JSZip from "jszip";

import {
  AvailableCard,
  CardState,
  DownloadZipFunc,
  RemoveCardFunc,
  UnavailableCard,
  UpdateCardsFunc
} from "../../types";

import DownloadButton from "../DownloadButton";
import List from "../List";
import TextInput from "../TextInput";
import { Container } from "./styles";

import { delay, formatName, getCardData } from "../../utils";

const App = () => {
  const [zip, setZip] = useState<JSZip>(new JSZip());
  const [cards, setCards] = useState<CardState>({
    available: [],
    unavailable: []
  });

  const updateCards: UpdateCardsFunc = async (names) => {
    const available: AvailableCard[] = [];
    const unavailable: UnavailableCard[] = [];

    for (const name of names) {
      const result: any = await getCardData(name).then(delay.bind(null, 100));

      if (result.error) {
        unavailable.push(result);
        continue;
      }

      available.push(result);
    }

    available.map(({ name, imageData }) => {
      zip.file(`${formatName(name)}.jpg`, imageData, { binary: true });
    });

    setCards({
      available,
      unavailable
    });
  };

  const removeCard: RemoveCardFunc = () => {};

  const downloadZip: DownloadZipFunc = () => {};

  return (
    <Container>
      <p>Hello World</p>

      <TextInput updateCards={updateCards} />

      <List cards={cards} removeCard={removeCard} />

      <DownloadButton zip={zip} downloadZip={downloadZip} />
    </Container>
  );
};

export default App;
