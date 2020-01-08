import React, { useState } from "react";
import { A } from "hookrouter";
import axios from "axios";
import "./Login.css";

function Login() {
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  const handleOnChange = event => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    const { email, password } = formValue;
    const checkMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const obj = {
      email,
      password
    };

    // if (checkMail.test(mail)) {
    //   axios
    //     .post(process.env.REACT_APP_API_URL, obj)
    //     .then(res => console.log(res));
    // }
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
          <h3>Connexion</h3>
        </div>

        <div className="form-group">
          <input
            name="mail"
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
          <button className="form-button" type="submit">
            connexion
          </button>
        </div>
        <div className="form-footer">
          Pas de compte ? <A href="/register">S'inscrire</A>
        </div>
      </form>
    </div>
  );
}

export default Login;
