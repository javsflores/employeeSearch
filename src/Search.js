import React from "react";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <label>Search: </label>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
