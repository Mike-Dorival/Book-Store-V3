import React, { useState } from "react";
import listBooks from "./books.json";
import Book from "../Book/Book";

function ListBooks() {
  const [dataBooks] = useState({ listBooks: [listBooks.books] });

  return (
    <div>
      {dataBooks.listBooks[0].map(book => {
        return <Book key={book.isbn} listBooks={book} />;
      })}
    </div>
  );
}

export default ListBooks;
