import React from "react";

function Book({ listBooks }) {
  const {
    title,
    subtitle,
    author,
    publisher,
    price,
    imgURL,
    description
  } = listBooks;
  return (
    <div className="Book-container">
      <img src={imgURL} alt="img" />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Book;
