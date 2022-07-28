import React from "react";

function Search({ searchInput, setSearchInput }) {

  function handleSearchBar (event) {
    setSearchInput(event.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchInput}
        onChange={handleSearchBar}
      />
    </div>
  );
}

export default Search;
