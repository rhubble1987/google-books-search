import React from "react";

const SearchContext = React.createContext({
    searchTerms: "",
    searchResults: []
});

export default SearchContext;