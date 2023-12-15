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
      <h1 className="loginTitle">Login</h1>
      <input
        className="input"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        className="input"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="loginButton" onClick={handleLogin}>
        Login
      </button>
      <div className="loginAsText">Login as:</div>
      <div className="forgotPasswordText">Forgot Password?</div>
    </div>
  );
};

export default Login;
