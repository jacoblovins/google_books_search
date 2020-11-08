import React, { useState } from "react";
import API from "../utils/API";
import Book from "../components/book";
import Card from "../components/card";
import Search from "../components/search";

function Main() {

  const [books, setBooks] = useState([])
  const [message, setMessage] = useState("No Results Yet!")
  const [val, setVal] = useState("")

  const handleInputChange = e => {
    setVal(e.target.value);
  };

  const submitForm = event => {
    event.preventDefault();
    getBooks();
  };

  const getBooks = () => {
    API.getBooks(val)
      .then(res =>
        setBooks(res.data)
      ).catch(() => {
        setBooks([])
        setMessage("No Matches")
      });
  };

  const saveBook = id => {
    const book = books.find(book => book.id === id);
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => getBooks());
  };

  return (
    <div>
      <div >
        <Card title="Search for a Book!">
          <Search handleInputChange={handleInputChange} submitForm={submitForm} val={val} />
          <br/>
          <br/>
          <br/>
          {books.length ? (
            <ul className="list-group">
              {books.map(book => (
                <Book
                  key={book.id}
                  title={book.volumeInfo.title}
                  subtitle={book.volumeInfo.subtitle}
                  link={book.volumeInfo.infoLink}
                  authors={book.volumeInfo.authors.join(", ")}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  Button={() => (
                    <button onClick={() => saveBook(book.id)} className="btn btn-primary">Save</button>
                  )} />
              ))}
            </ul>) : (<h2 className="text-center">{message}</h2>)}
        </Card>
      </div>
    </div>
  );
}
export default Main;



