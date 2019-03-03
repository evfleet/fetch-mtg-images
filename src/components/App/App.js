import React, { useState } from "react";
import { saveAs } from "file-saver";
import Zip from "jszip";

import formatName from "../../utils/formatName";
import getImageData from "../../utils/getImageData";
import List from "../List";
import Search from "../Search";

const App = () => {
  const [zip, setZip] = useState(new Zip());
  const [cards, setCards] = useState([]);
  const [quality, setQuality] = useState("");

  const addCard = async (card) => {
    try {
      const formattedName = formatName(card.name);
      const imageData = await getImageData(card.image_uris.large);

      zip.file(`${formattedName}.jpg`, imageData, { binary: true });

      setCards([...cards, card]);
    } catch (error) {
      console.log("error adding card", error);
    }
  };

  const deleteCard = (name, cardIndex) => {
    const newCards = cards.filter((_, index) => index !== cardIndex);
    setCards(newCards);
  };

  const downloadImages = async () => {
    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "images.zip");
    setZip(new Zip());
  };

  return (
    <div>
      <Search addCard={addCard} />
      <List cards={cards} deleteCard={deleteCard} />

      <button onClick={downloadImages}>Download</button>
    </div>
  );
};

export default App;
