import React, { useState, useEffect } from "react";
import Card from "../components/card";
import Book from "../components/book";
import API from "../utils/API";


function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getSavedBooks();
  },[])

  const getSavedBooks = () => {
    API.getSavedBooks()
      .then(res => {
        setBooks(res.data)
      }).catch(err => console.log(err));
  };

  const handleBookDelete = id => {
    API.deleteBook(id).then(res => getSavedBooks());
  };

  return (
    <Card title="Saved Books">
      {books.length ? (
        <ul className="list-group">
          {books.map(book => (
            <Book
              key={book._id}
              title={book.title}
              subtitle={book.subtitle}
              link={book.link}
              authors={book.authors.join(", ")}
              description={book.description}
              image={book.image}
              Button={() => (
                <button onClick={() => handleBookDelete(book._id)} className="btn btn-danger">Delete</button>
              )}
            />
          ))}
        </ul>
      ) : (
          <h2 className="text-center">No Saved Books</h2>
        )}
    </Card>
  );

}

export default Saved;



