import React from "react";
import { A } from "hookrouter";

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li id="title">
            <A href="/">Book-store</A> <br />
          </li>
          <li>
            <A href="/myAccount">Mon compte</A>
          </li>
          <li>
            <a href="lol">Mon panier</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
