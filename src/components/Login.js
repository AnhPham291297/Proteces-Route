import _ from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import AppContext from "../Context/Context";
import authServices from "../services/authServices";
import "./login.css";

const Login = () => {
  const { admin, user, setUser, login, isLogIn, setIsLogIn } =
    useContext(AppContext);

  useEffect(() => {
    const user = authServices.getUserLocalStorage();
    !_.isEmpty(user) && setIsLogIn(true);
  }, [isLogIn]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.name !== admin.name ||
      user.email !== admin.email ||
      user.password !== admin.password
    ) {
      alert("Login failed");
    } else {
      // alert("login succesfuly");
      navigate("/changecolor", { replace: true });
      login(user);
      authServices.saveUserLocalStorage(user);
    }
  };

  if (isLogIn) {
    return <Navigate to="/changecolor" />;
  }

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form className="form-login" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name..."
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email..."
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password..."
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
