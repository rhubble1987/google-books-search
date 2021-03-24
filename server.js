const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const Book = require("./models/Book.js");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
 });


app.post("/api/books", (req,res) => {
  Book.create(req.body)
  .then(dbBook => {
    res.json(dbBook);
  })
  .catch(err => {
    res.send(err);
  });

});

app.get("/api/books", (req,res) => {
  Book.find({})
  .then(dbBooks => {
    res.json(dbBooks);
  })
  .catch(err => {
    res.send(err);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`App started on localhost:${PORT}!`);
});