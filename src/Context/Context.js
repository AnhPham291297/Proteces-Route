import { isEqual } from "lodash";
import React, { useState, createContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const admin = {
    name: "NgocAnh",
    email: "anh.potter1997@gmail.com",
    password: "ngocanh",
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLogIn, setIsLogIn] = useState(false);

  console.log("isLogIn", isLogIn);
  const login = (user) => {
    //* Gia su nhap dung username/password
    if (isEqual(admin, user)) {
      setUser(user);
      setIsLogIn(true);
    }
  };

  const logout = () => {
    setUser({ name: "", email: "", password: "" });
    setIsLogIn(false);
  };

  return (
    <AppContext.Provider
      value={{ admin, user, setUser, isLogIn, setIsLogIn, login, logout }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
