import React, { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

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
  const initialCardState: CardState = {
    available: [],
    unavailable: []
  };

  const [zip, setZip] = useState<JSZip>(new JSZip());
  const [cards, setCards] = useState<CardState>(initialCardState);

  const updateCards: UpdateCardsFunc = async (names) => {
    const available: AvailableCard[] = [];
    const unavailable: UnavailableCard[] = [];

    for (const name of names) {
      const result: any = await getCardData(name).then(delay.bind(null, 250));

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

  const downloadZip: DownloadZipFunc = async () => {
    try {
      const blob = await zip.generateAsync({ type: "blob" });
      saveAs(blob, "images.zip");
      setZip(new JSZip());
      setCards(initialCardState);
    } catch (error) {
      console.log("Error downloading zip");
    }
  };

  return (
    <Container>
      <TextInput updateCards={updateCards} />

      <List cards={cards} removeCard={removeCard} />

      <DownloadButton downloadZip={downloadZip} zip={zip} />
    </Container>
  );
};

export default App;
