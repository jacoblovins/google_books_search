const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  subtitle: String,
  authors: [String],
  link: String,
  description: String,
  image: String,
  googleId: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = {Book};
