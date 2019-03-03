import React, { useState } from "react";
import Zip from "jszip";

import formatName from "../../utils/formatName";
import getImageAPI from "../../utils/getImageAPI";
import List from "../List";
import Search from "../Search";

const App = () => {
  const [cards, setCards] = useState([]);
  const [quality, setQuality] = useState("");
  const [isWorking, setIsWorking] = useState(false);

  let zip = new Zip();

  const addCard = async (card) => {
    setCards([...cards, card]);
  };

  const deleteCard = (cardIndex) => {
    const newCards = cards.filter((_, index) => index !== cardIndex);
    setCards(newCards);
  };

  const downloadImages = () => {};

  return (
    <div>
      <Search addCard={addCard} />
      <List cards={cards} deleteCard={deleteCard} />
    </div>
  );
};

export default App;
