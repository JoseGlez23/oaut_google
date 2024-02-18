import React, { useState } from "react";
import "../App.css";
import { useAuth } from "../context/AuthContext";

function FormsFirebase() {
  const auth = useAuth();
  const { displayName } = auth.user;
  console.log(displayName);

  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password, "statelLogin");

  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(emailRegister, passwordRegister);
  };
  const handLogin = (e) => {
    e.preventDefault();
    auth.login(email, password);
  };

  const handleGoogle = (e) => {
    e.preventDefault;
    auth.loginWithGoogle();
  };
  const handleLogout = () => {
    auth.logout();
  };

  return (
    <div className="App">
      {displayName && <h5>Gracias por suscribirte : {displayName}</h5>}
      <form className="form">
        <h3 className="tittle">Register</h3>
        <input
          onChange={(e) => setEmailRegister(e.target.value)}
          className="input"
          type="email"
        />
        <input
          onChange={(e) => setPasswordRegister(e.target.value)}
          className="input"
          type="password"
        />
        <button onClick={(e) => handleRegister(e)} className="button">
          submit
        </button>
      </form>

      <form className="form">
        <h3 className="tittle">Login</h3>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          type="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          type="password"
        />
        <button onClick={(e) => handLogin(e)} className="button">
          submit
        </button>
        <button onClick={(e) => handleGoogle(e)} className="button">
          Google
        </button>
      </form>

      <button onClick={() => handleLogout()} className="button">
        Logout
      </button>
    </div>
  );
}

export default FormsFirebase;
