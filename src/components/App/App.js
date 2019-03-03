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

  const addCard = async (card) => {
    try {
      const formattedName = formatName(card.name);
      const imageData = await getImageData(card.image_uris.large);

      zip.file(`${formattedName}.jpg`, imageData, { binary: true });

      if (!cards.find((c) => c.name === card.name)) {
        setCards([...cards, card]);
      }
    } catch (error) {
      console.log("error adding card", error);
    }
  };

  const deleteCard = (name) => {
    const formattedName = formatName(name);
    const newCards = cards.filter((card) => card.name !== name);

    zip.remove(`${formattedName}.jpg`);
    setCards(newCards);
  };

  const downloadImages = async () => {
    try {
      const blob = await zip.generateAsync({ type: "blob" });
      saveAs(blob, "images.zip");
      setZip(new Zip());
      setCards([]);
    } catch (error) {
      console.log("error downloading zip", error);
    }
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
