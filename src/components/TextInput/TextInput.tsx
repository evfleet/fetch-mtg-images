import React from "react";

import { AddCardFunc } from "../../types";

interface TextInputProps {
  addCard: AddCardFunc;
}

const TextInput: React.SFC<TextInputProps> = () => {
  return <div>Text Input</div>;
};

export default TextInput;
