const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "You must enter a title"
    },
    authors: {
        type: Array,
        required: "You must enter an author"
    },
    description: {
        type: String,
        trim: false,
        required: "You must enter a description"
    },
    image: {
        type: String,
        trim: true,
        required: "You must provide the book's cover"
    },
    link: {
        type: String,
        trim: true,
        required: "You must provide a link"
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;