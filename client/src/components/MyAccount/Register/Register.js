import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleOnChange = event => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    const { username, email, password } = formValue;
    const checkMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const obj = {
      username,
      email,
      password
    };

    // ajouter un catch pour capturer l'erreur
    if (checkMail.test(email)) {
      console.log("dans la condition");
      axios
        .post(`${process.env.REACT_APP_API_URL}/register`, obj)
        .then(res => console.log("response", res));
    }
  };

  return (
    <div className="wrap">
      <form
        className="login-form"
        action=""
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
      >
        <div className="form-header">
          <h3>Nouveau compte client</h3>
        </div>

        <div className="form-group">
          <input
            name="username"
            type="text"
            className="form-input"
            placeholder="Nom d'utilisateur"
          />
        </div>

        <div className="form-group">
          <input
            name="email"
            type="text"
            className="form-input"
            placeholder="Votre email email@example.com"
          />
        </div>

        <div className="form-group">
          <input
            name="password"
            type="password"
            className="form-input"
            placeholder="Votre mot de passe"
          />
        </div>

        <div className="form-group">
          <button
            className="form-button"
            type="submit"
            onSubmit={handleOnSubmit}
          >
            M'inscrire
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
