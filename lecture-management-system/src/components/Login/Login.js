import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login Successful");
  };

  return (
    <div className="container">
      <h1 className="loginTitle">Login as:</h1>
      <div className="login_radio_buttons">
        <label className="login_selections">
          <input type="radio" name="userType" value="Lecture Manager" checked />{" "}
          Lecture Manager
        </label>
        <label className="login_selections">
          <input type="radio" name="userType" value="Professor" /> Professor
        </label>
      </div>
      <div id="input_styles">
        <label>Username: </label>
        <input
          className="input"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>Password: </label>
        <input
          className="input"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="forgotPasswordText">Forgot Password?</div>
      <button className="loginButton" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
