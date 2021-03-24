import axios from "axios";

export default {
    searchForBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyAE-eBEmJDu_9gFhmV0YWUFk_gCEWUYZQE`);
    },
    loadSavedBooks: function() {
        return axios.get('http://localhost:3000/api/books');
    },
    deleteSavedBook: function(bookId) {
        return axios.delete(`http://localhost:3000/api/books/${bookId}`);
    },
    saveBook: function(book) {
        return axios.post('http://localhost:3000/api/books', {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            link: book.volumeInfo.previewLink,
            image: book.volumeInfo.imageLinks.thumbnail

        });
    }
}