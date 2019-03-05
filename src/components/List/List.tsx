import React from "react";

import { CardState, RemoveCardFunc } from "../../types";

interface ListProps {
  cards: CardState;
  removeCard: RemoveCardFunc;
}

const List: React.SFC<ListProps> = ({ cards: { available, unavailable }, removeCard }) => {
  const handleClick = (name: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    removeCard(name);
  };

  const availableCards = available.map(({ name, image, thumbnail }, index) => (
    <div key={`${name}-${index}`}>
      <p>{name}</p>
      <img src={thumbnail} alt={`Thumbnail for ${name}`} />
      <button onClick={handleClick(name)}>Delete</button>
    </div>
  ));

  const unavailableCards = unavailable.map(({ name, error }, index) => (
    <div key={`${name}-${index}`}>
      <p>{name}</p>
    </div>
  ));

  return (
    <div>
      <div>{availableCards}</div>
      <div>{unavailableCards}</div>
    </div>
  );
};

export default List;
