import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedUserType, setSelectedUserType] = useState("");

  const handleLogin = () => {
    if (selectedUserType === "Lecture Manager") {
      if (username === "SRHlectureManager" && password === "iamlm") {
        console.log("Lecture Manager Login Successful");
      } else {
        console.log("Invalid Lecture Manager credentials");
      }
    } else if (selectedUserType === "Professor") {
      if (username === "SRHprofessor" && password === "iamprof") {
        console.log("Professor Login Successful");
      } else {
        console.log("Invalid Professor credentials");
      }
    } else {
      console.log("Please select a user type");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-box">
        <div className="login-container">
          <h1 className="login-title">Login as:</h1>
          <div className="radio-buttons">
            <label className="selection">
              <input
                type="radio"
                name="userType"
                value="Lecture Manager"
                checked={selectedUserType === "Lecture Manager"}
                onChange={() => setSelectedUserType("Lecture Manager")}
              />{" "}
              Lecture Manager
            </label>
            <label className="selection">
              <input
                type="radio"
                name="userType"
                value="Professor"
                checked={selectedUserType === "Professor"}
                onChange={() => setSelectedUserType("Professor")}
              />{" "}
              Professor
            </label>
          </div>
          <div className="input-styles">
            <label>Username: </label>
            <input
              className="input-field"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <label>Password: </label>
            <input
              className="input-field"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="forgot-password-text">Forgot Password?</div>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;