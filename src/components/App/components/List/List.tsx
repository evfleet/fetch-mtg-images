import React from "react";

import { CardState, RemoveCardFunc } from "../../../../types";

interface ListProps {
  cards: CardState;
  removeCard: RemoveCardFunc;
}

const List: React.SFC<ListProps> = ({ cards: { available, unavailable }, removeCard }) => {
  const handleClick = (name: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    removeCard(name);
  };

  const availableCards = available.map(({ name, image, thumbnail }, index) => (
    <li key={`${name}-${index}`}>
      <p>{name}</p>
      <img src={thumbnail} alt={`Thumbnail for ${name}`} />
      <button onClick={handleClick(name)}>Delete</button>
    </li>
  ));

  const unavailableCards = unavailable.map(({ name, error }, index) => (
    <li key={`${name}-${index}`}>
      <p>{name}</p>
    </li>
  ));

  return (
    <>
      {availableCards.length > 0 && (
        <div>
          <h2>Available Cards</h2>
          <ul>{availableCards}</ul>
        </div>
      )}

      {unavailableCards.length > 0 && (
        <div>
          <h2>Unavailable Cards</h2>
          <ul>{unavailableCards}</ul>
        </div>
      )}
    </>
  );
};

export default List;
