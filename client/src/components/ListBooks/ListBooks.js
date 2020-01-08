import React, { useState, useEffect } from "react";
import listBooks from "./books.json";
import Book from "../Book/Book";
import "./ListBooks.css";

function ListBooks({ search }) {
  const [dataBooks] = useState(listBooks);
  const [searchResults, setSearchResults] = useState([]);
  const searchByTitle = search.search.toString().toLowerCase();

  useEffect(() => {
    const results = dataBooks.filter(book =>
      book.title.toLowerCase().includes(searchByTitle)
    );

    setSearchResults(results);
  }, [dataBooks, searchByTitle]);

  return (
    <div className="ListBooks_row">
      {searchResults.length === 0 && searchByTitle.length > 0 ? (
        <p>Votre livre est introuvable</p>
      ) : searchResults.length === 0 ? (
        dataBooks.map(book => {
          return <Book key={book.isbn} listBooks={book} />;
        })
      ) : (
        searchResults.map(book => {
          return <Book key={book.isbn} listBooks={book} />;
        })
      )}
    </div>
  );
}

export default ListBooks;
