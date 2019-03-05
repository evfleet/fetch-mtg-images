import React from "react";

import { CardState } from "../../types";

interface ListProps {
  cards: CardState;
}

const List: React.SFC<ListProps> = () => {
  return <div>List</div>;
};

export default List;
