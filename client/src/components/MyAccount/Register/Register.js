import React, { useState } from "react";

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

  return (
    <div className="wrap">
      <form
        className="login-form"
        action=""
        onChange={handleOnChange}
        //onSubmit={handleOnSubmit}
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
          <button className="form-button" type="submit">
            M'inscrire
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
