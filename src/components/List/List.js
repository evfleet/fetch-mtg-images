import React from "react";

const List = ({ cards, deleteCard }) => (
  <div>
    {cards.map((card, index) => (
      <div key={`card-${index}`}>
        {card.name}
        <button onClick={() => deleteCard(card.name)}>X</button>
      </div>
    ))}
  </div>
);

export default List;
