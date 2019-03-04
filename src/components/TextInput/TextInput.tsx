import React, { useState } from "react";

import { UpdateCardsFunc } from "../../types";

interface TextInputProps {
  updateCards: UpdateCardsFunc;
}

const TextInput: React.SFC<TextInputProps> = ({ updateCards }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    const names = [...new Set(value.split(/\r?\n/))];
    updateCards(names);
  };

  return (
    <div>
      <textarea value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
};

export default TextInput;
