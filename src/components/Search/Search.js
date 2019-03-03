import React, { useEffect, useState } from "react";
import Autocomplete from "react-autocomplete";

import searchAPI from "../../utils/searchAPI";
import useDebounce from "../../utils/useDebounce";

const Search = ({ addCard }) => {
  const [value, setValue] = useState({ name: "" });
  const [results, setResults] = useState([]);
  const [isChanging, setIsChanging] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearch = useDebounce(value, 500);

  useEffect(() => {
    if (debouncedSearch && value.name.length >= 2) {
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
          console.log("submit");

          event.preventDefault();
          setValue({ name: "" });
          addCard(value);
        }}
      >
        <Autocomplete
          items={results}
          value={value.name}
          getItemValue={(card) => card.name}
          onSelect={(value, item) => {
            console.log(item);
            setValue(item);
          }}
          onChange={(event, value) => {
            setIsChanging(true);
            setValue({ name: value });
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
