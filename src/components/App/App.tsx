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

import CardList from "./components/CardList";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import TextInput from "./components/TextInput";
import { Container, InputContainer, ListContainer, Wrapper } from "./styles";

import { delay, formatName, getCardData } from "../../utils";

const App = () => {
  const initialCardState: CardState = {
    available: [
      {
        image: "https://img.scryfall.com/cards/png/en/ss1/1.png?1529364963",
        imageData: new ArrayBuffer(123131),
        name: "Jace Beleren"
      }
    ],
    unavailable: [
      {
        name: "Test 123",
        error: "Not Found"
      }
    ]
  };

  const [zip, setZip] = useState<JSZip>(new JSZip());
  const [cards, setCards] = useState<CardState>(initialCardState);
  const [value, setValue] = useState<string>("");
  const [isWorking, setIsWorking] = useState<boolean>(false);

  const updateValue: UpdateValueFunc = (input) => {
    setValue(input);
  };

  const updateCards: UpdateCardsFunc = async (names) => {
    let available: AvailableCard[] = [];
    let unavailable: UnavailableCard[] = [];

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

    available = [...new Set([...cards.available, ...available])];
    unavailable = [...new Set([...cards.unavailable, ...unavailable])];

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
        <Header />

        <InputContainer>
          <TextInput
            isWorking={isWorking}
            updateCards={updateCards}
            updateValue={updateValue}
            value={value}
          >
            <Loader />
          </TextInput>
        </InputContainer>

        <ListContainer>
          <CardList cards={cards} removeCard={removeCard}>
            <Download downloadZip={downloadZip} zip={zip} />
          </CardList>
        </ListContainer>

        <Footer />
      </Container>
    </Wrapper>
  );
};

export default App;
