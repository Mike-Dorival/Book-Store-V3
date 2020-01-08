import React, { useState } from "react";
import "./Home.css";
import ListBooks from "../ListBooks/ListBooks";

function Home() {
  const [search, setSearch] = useState({ search: "" });

  const handleOnChange = event => {
    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });
  };

  return (
    <div>
      <div className="container">
        <div className="Home-sub-header">
          <div className="Home-align-text-vertical">
            <h1 className="Home-sub-header-title">Bienvenue chez Book-store</h1>
            <p className="Home-sub-header-sub-title">
              Retrouvez vos livres IT, Programmation, Design...
            </p>
          </div>
        </div>
        <form>
          <input
            type="search"
            name="search"
            onChange={handleOnChange}
            placeholder="Rechercher un bouquin par son titre"
          />
        </form>
        <ListBooks search={search} />
      </div>
    </div>
  );
}

export default Home;
