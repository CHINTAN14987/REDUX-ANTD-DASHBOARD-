import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Login.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleLoginChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h3 className="heading">Please Enter Your Credentials To Login...!</h3>
      <div className="loginContainer">
        <label>Email Address:</label>
        <input
          value={data.email}
          onChange={handleLoginChange}
          name="email"
          type="email"
          placeholder="xyz@gmail.com"
        />
        <label>Password:</label>
        <input
          value={data.password}
          onChange={handleLoginChange}
          name="password"
          type="password"
        />
        <div className="buttonFlex">
          <button onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
