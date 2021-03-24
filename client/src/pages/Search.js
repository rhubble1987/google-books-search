
import React, { useState } from "react";
//import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import API from "../utils/API";



function Search() {

  const [searchTerms, setSearchTerms] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchBarChange = event => {
    setSearchTerms(event.target.value);
  }

  const handleSearch = event => {
    event.preventDefault();
    API.searchForBooks(searchTerms)
    .then(res => {
        if(res === null) {
          throw new Error("No results found");
        }
        setSearchResults(res.data.items);
      });
  }
 
  
  

  

  return (
    <div>
      <div className="box has-background-info m-5">
      <div className="field">
        <label className="label is-large has-text-white">Book Search</label>
        <div className="control is-large">
          <input
            className="input is-large"
            type="text"
            placeholder="Search for a book"
            id="search-query"
            onChange={handleSearchBarChange}
          />
        </div>
      </div>
      <div className="field is-flex is-justify-content-flex-end">
        <div className="control">
          <button onClick={handleSearch} id="book-search" className="button is-medium">
            Search
          </button>
        </div>
      </div>
    </div>
      <div className="box has-background-info m-5">
      <p className="title is-large has-text-white">Results</p>
      {searchResults.length ? (
        <div>
          {searchResults.map(searchResult => {
            return (
              <SearchResult key={searchResult.id} searchResult={searchResult}/>
            )
          
        })}
        </div>
      ):(
        <p>No search results</p>
      )}
      </div>
    </div>
  )
}


export default Search;
