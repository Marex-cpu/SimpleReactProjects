import React from "react";
import { ImSearch } from "react-icons/im";

function Search({ handleSearchNote }) {
  return (
    <div className='search'>
      <ImSearch style={{ marginRight: "0.5rem" }} fontSize={18} />
      <input
        className='searchInput'
        type='text'
        placeholder='type to search...'
        onChange={(event) => handleSearchNote(event.target.value)}
      />
    </div>
  );
}

export default Search;
