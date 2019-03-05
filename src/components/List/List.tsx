import React from "react";

import { CardState, RemoveCardFunc } from "../../types";

interface ListProps {
  cards: CardState;
  removeCard: RemoveCardFunc;
}

const List: React.SFC<ListProps> = () => {
  return <div>List</div>;
};

export default List;
