import React, { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

import {
  AvailableCard,
  CardState,
  DownloadZipFunc,
  RemoveCardFunc,
  UnavailableCard,
  UpdateCardsFunc,
  UpdateValueFunc
} from "../../types";

import Download from "../Download";
import Footer from "../Footer";
import Header from "../Header";
import List from "../List";
import TextInput from "../TextInput";
import { Container, Wrapper } from "./styles";

import { delay, formatName, getCardData } from "../../utils";

const App = () => {
  const initialCardState: CardState = {
    available: [],
    unavailable: []
  };

  const [zip, setZip] = useState<JSZip>(new JSZip());
  const [cards, setCards] = useState<CardState>(initialCardState);
  const [value, setValue] = useState<string>("");
  const [isWorking, setIsWorking] = useState<boolean>(false);

  const updateValue: UpdateValueFunc = (input) => {
    setValue(input);
  };

  const updateCards: UpdateCardsFunc = async (names) => {
    const available: AvailableCard[] = [];
    const unavailable: UnavailableCard[] = [];

    setIsWorking(true);
    setValue("");

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

    setIsWorking(false);
    setCards({
      available,
      unavailable
    });
  };

  const removeCard: RemoveCardFunc = (name) => {
    const available = cards.available.filter((card) => card.name !== name);
    const unavailable = cards.unavailable.filter((card) => card.name !== name);

    zip.remove(`${formatName(name)}.jpg`);

    setCards({
      available,
      unavailable
    });
  };

  const downloadZip: DownloadZipFunc = async () => {
    try {
      const blob = await zip.generateAsync({ type: "blob" });
      saveAs(blob, "card-images.zip");
      setZip(new JSZip());
      setCards(initialCardState);
    } catch (error) {
      console.log("Error downloading zip");
    }
  };

  return (
    <Wrapper>
      <Container>
        <TextInput updateCards={updateCards} updateValue={updateValue} value={value} />
        <List cards={cards} removeCard={removeCard} />

        {isWorking && "Working"}
        <Download downloadZip={downloadZip} zip={zip} />
      </Container>
    </Wrapper>
  );
};

export default App;
