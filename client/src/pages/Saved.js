import SavedBook from "../components/SavedBook";

let savedBooks = [];

function Saved() {
    return (
        <div className="box has-background-info m-5">
        <p className="title is-large has-text-white">Saved Books</p>
        {savedBooks.map(book => {
            <SavedBook book={book}/>
        })}
        </div>
       
    );
}

export default Saved;