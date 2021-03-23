function SearchBar() {
    return (
    <div className="box has-background-info m-5">
      <div className="field">
        <label class="label is-large has-text-white">Book Search</label>
        <div class="control is-large">
          <input
            class="input is-large"
            type="text"
            placeholder="Search for a book"
          />
        </div>
      </div>
      <div class="field is-flex is-justify-content-flex-end">
        <div class="control">
          <button id="book-search" class="button is-medium">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;