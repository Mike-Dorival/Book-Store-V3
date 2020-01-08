import React from "react";
import "./Book.css";

function Book({ listBooks }) {
  const { title, author, price, imgURL } = listBooks;
  return (
    <article className="card">
      <img src={imgURL} alt="img" />
      <div className="text">
        <h3 className="Book-title">{title}</h3>
        <h4 className="Book-author">{author}</h4>
        <p>Neuf : {price} €</p>
        <button>Ajouter au panier</button>
      </div>
    </article>
  );
}

export default Book;
