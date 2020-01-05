import React from "react";
import "./Home.css";
import ListBooks from "../ListBooks/ListBooks";

function Home() {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li id="title">
              <a href="lol">Book-store</a>
            </li>
            <li>
              <form>
                <input type="search" name="search" />
              </form>
            </li>
            <li>
              <a href="lol">Mon compte</a>
            </li>
            <li>
              <a href="lol">Mon panier</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="Home-sub-header">
        <div className="Home-align-text-vertical">
          <h1 className="Home-sub-header-title">Bienvenue chez Book-store</h1>
          <p className="Home-sub-header-sub-title">
            Retrouvez vos livres IT, Programmation, Design...
          </p>
        </div>
      </div>
      <ListBooks />
    </div>
  );
}

export default Home;
