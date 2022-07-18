import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../Context/Context";

const Header = () => {
  const auth = useContext(AppContext);

  return (
    <header>
      <ul>
        <li>
          <Link to="/changecolor">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        {!auth.isLogIn && (
          <li>
            <Link to="/login">Log In</Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
