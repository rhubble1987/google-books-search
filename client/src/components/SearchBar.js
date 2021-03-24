function SearchBar(props) {
    return (
    <div className="box has-background-info m-5">
      <div className="field">
        <label className="label is-large has-text-white">Book Search</label>
        <div className="control is-large">
          <input
            className="input is-large"
            type="text"
            placeholder="Search for a book"
            id="search-query"
          />
        </div>
      </div>
      <div className="field is-flex is-justify-content-flex-end">
        <div className="control">
          <button onClick={props.setSearchTerms(document.getElementById("search-query".value))} id="book-search" className="button is-medium">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;