import React, { useEffect, useState } from "react";
import Autocomplete from "react-autocomplete";

import searchAPI from "../../utils/searchAPI";
import useDebounce from "../../utils/useDebounce";

const Search = ({ addCard }) => {
  const [input, setInput] = useState({ name: "" });
  const [results, setResults] = useState([]);
  const [isChanging, setIsChanging] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearch = useDebounce(input, 500);

  useEffect(() => {
    if (debouncedSearch && input.name.length >= 2) {
      setIsSearching(true);
      searchAPI(debouncedSearch.name).then((cards) => {
        setIsChanging(false);
        setIsSearching(false);
        setResults(cards);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearch]);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          // TODO only allow submit if its a valid card

          const card = results.find((r) => r.name === input.name);
          setInput({ name: "" });
          addCard(card);
        }}
      >
        <Autocomplete
          items={results}
          value={input.name}
          getItemValue={(card) => card.name}
          onSelect={(value, item) => {
            setInput({ name: value });
          }}
          onChange={(event, value) => {
            setIsChanging(true);
            setInput({ name: value });
          }}
          renderItem={(card) => <div key={card.id}>{card.name}</div>}
          renderInput={(props) => (
            <div>
              <input {...props} />
              {isSearching && isChanging ? "Loading" : ""}
            </div>
          )}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Search;
