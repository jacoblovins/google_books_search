const db = require("../models");

// export all database queries to be used by the app
module.exports = {

  // get books based on their id
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
  },

  // get all books from the database
  findAll: function(req, res) {
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
  },

  // update book based on its id
  update: function(req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
  },

  // add a new saved book to the database
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
  },


  // delete the book based on its id
  remove: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
  }
};
