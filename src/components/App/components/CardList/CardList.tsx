import React from "react";

import { CardState, RemoveCardFunc, UpdateCardViewerFunc } from "../../../../types";

import { CardHeader, Heading, List, ListItem, ListImage } from "./styles";

interface CardListProps {
  cards: CardState;
  removeCard: RemoveCardFunc;
  updateCardViewer: UpdateCardViewerFunc;
}

const CardList: React.SFC<CardListProps> = ({
  children,
  cards: { available, unavailable },
  removeCard,
  updateCardViewer
}) => {
  const handleClick = (name: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    removeCard(name);
  };

  const handleMouseEnter = (image: string) => (event: React.MouseEvent<HTMLElement>) => {
    updateCardViewer(image);
  };

  const handleMouseLeave = () => (event: React.MouseEvent<HTMLElement>) => {
    updateCardViewer();
  };

  const availableCards = available.map(({ name, image }, index) => (
    <ListItem key={`${name}-${index}`}>
      <ListImage onMouseEnter={handleMouseEnter(image)} onMouseLeave={handleMouseLeave()}>
        <img src={image} alt={`Thumbnail for ${name}`} />
      </ListImage>

      <p>{name}</p>
      <button onClick={handleClick(name)}>Delete</button>
    </ListItem>
  ));

  const unavailableCards = unavailable.map(({ name, error }, index) => (
    <ListItem key={`${name}-${index}`}>
      <p>{name}</p>
      <button onClick={handleClick(name)}>Delete</button>
    </ListItem>
  ));

  return (
    <>
      {availableCards.length > 0 && (
        <section>
          <CardHeader>
            <Heading>Available Cards</Heading>
            {children}
          </CardHeader>

          <List>{availableCards}</List>
        </section>
      )}

      {unavailableCards.length > 0 && (
        <section>
          <CardHeader>
            <Heading>Unavailable Cards</Heading>
          </CardHeader>

          <List>{unavailableCards}</List>
        </section>
      )}
    </>
  );
};

export default CardList;
