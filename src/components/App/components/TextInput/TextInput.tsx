import React, { useState } from "react";

import { UpdateCardsFunc, UpdateValueFunc } from "../../../../types";

import { TextArea } from "./styles";

interface TextInputProps {
  updateCards: UpdateCardsFunc;
  updateValue: UpdateValueFunc;
  value: string;
}

const TextInput: React.SFC<TextInputProps> = ({ updateCards, updateValue, value }) => {
  const handleChange = (event: React.ChangeEvent) => {
    updateValue((event.target as any).value);
  };

  const handleSubmit = () => {
    const names = [...new Set(value.split(/\r?\n/))];
    updateCards(names);
  };

  return (
    <>
      <TextArea value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>Update</button>
    </>
  );
};

export default TextInput;
