import SavedBook from "../components/SavedBook";
import React, {useState, useEffect} from "react";
import API from "../utils/API";



function Saved() {
    const [savedBooks, setSavedBooksState] = useState([]);

    useEffect(() => {
        pullBooks();
    }, [])

    function pullBooks() {
        API.loadSavedBooks()
        .then(res => {
            setSavedBooksState(res.data);
        });
    };

    return (
        <div className="box has-background-info m-5">
        <p className="title is-large has-text-white">Saved Books</p>

        {savedBooks.length ? (
            <div>
            {savedBooks.map(book => {
                return (
                    <SavedBook key={savedBooks.id} book={book}/>
                );
            })}
            </div>
        ) : (
            <p>No saved books</p>
        )}
        
        </div>
       
    );
}

export default Saved;