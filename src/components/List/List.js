import React from "react";

const List = ({ cards }) => (
  <div>
    {cards.map((card, index) => (
      <div key={`card-${index}`}>{card.name}</div>
    ))}
  </div>
);

export default List;
