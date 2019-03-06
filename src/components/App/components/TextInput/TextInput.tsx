import React, { useState } from "react";

import { UpdateCardsFunc, UpdateValueFunc } from "../../../../types";

import { Button } from "../../../../styles/shared";
import { ButtonContainer, TextArea } from "./styles";

interface TextInputProps {
  isWorking: boolean;
  updateCards: UpdateCardsFunc;
  updateValue: UpdateValueFunc;
  value: string;
}

const TextInput: React.SFC<TextInputProps> = ({
  children,
  isWorking,
  updateCards,
  updateValue,
  value
}) => {
  const handleChange = (event: React.ChangeEvent) => {
    updateValue((event.target as any).value);
  };

  const handleSubmit = () => {
    if (length !== 0) {
      updateCards(names);
    }
  };

  const names = [...new Set(value.split(/\r?\n/))];
  const length = names.filter((n) => n !== "").length;

  return (
    <>
      <TextArea
        rows={10}
        placeholder="Type one card per line"
        value={value}
        onChange={handleChange}
      />

      <ButtonContainer>
        <Button onClick={handleSubmit}>{length > 1 ? "Add Cards" : "Add Card"}</Button>
        {isWorking && children}
      </ButtonContainer>
    </>
  );
};

export default TextInput;
