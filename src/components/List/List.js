import React from "react";

const List = ({ cards }) => (
  <div>
    {cards.map((card, index) => (
      <div>{card.name}</div>
    ))}
  </div>
);

export default List;
