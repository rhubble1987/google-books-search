import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";

let searchResults = [];

function Search() {
  return (
    <div>
      <SearchBar/>
      <div className="box has-background-info m-5">
      <p className="title is-large has-text-white">Results</p>
        {searchResults.map(searchResult => {
          <SearchResult searchResult={searchResult}/>
        })}
      </div>
    </div>
    
  )
}

export default Search;
