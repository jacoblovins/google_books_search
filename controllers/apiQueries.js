const axios = require("axios");
const db = require("../models");

module.exports = {
  // Returns all of the books pertaining to our search from the google api
  // minus the books we've already saved
  findAll: function(req, res) {
    const { query: params } = req;
    axios.get("https://www.googleapis.com/books/v1/volumes", {params})
    .then(res =>
        res.data.items.filter(
          // get rid of unnecessary information
          book =>
            book.volumeInfo.title &&
            book.volumeInfo.infoLink &&
            book.volumeInfo.authors &&
            book.volumeInfo.description &&
            book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.thumbnail
        )
      )
      .then(googleBooks =>
        db.Book.find().then(mongoBooks =>
          googleBooks.filter(googlebook =>
            mongoBooks.every(mongoBook => mongoBook.googleId.toString() !== googlebook.id)
          )
        )
      )
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};
