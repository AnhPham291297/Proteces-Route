import React, { useState, useRef, useContext } from "react";
import { trim } from "lodash";
import { hexToRgb } from "../helpers";
import AppContext from "../Context/Context";
import { useNavigate } from "react-router-dom";
import authServices from "../services/authServices";

const ChangeColor = () => {
  const [inputValueHex, setInputValueHex] = useState("");
  const [inputValueRgb, setInputValueRgb] = useState("");

  const auth = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/login", { replace: true });
    authServices.clearUserLocalStorage();
  };

  let inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const hexValue = trim(inputValueHex);
    setInputValueRgb(hexToRgb(hexValue));
    console.log(inputValueHex);
    inputRef.current.focus();
  };

  const trimValue = () => {
    setInputValueHex(inputValueHex.trim());
  };

  return (
    <div className="container">
      <h4 className="h4-title">Hex to Rgb Convert</h4>
      <form
        style={{ margin: "30px 0", padding: "0 20px" }}
        onSubmit={handleSubmit}
      >
        <label style={{ margin: "0 0 15px 15px", display: "block" }}>
          Color Format : {inputValueHex}
        </label>
        <span className="span_input">
          <input
            type="color"
            value={inputValueHex}
            onChange={(e) => setInputValueHex(e.target.value)}
          />
          <input
            type="text"
            placeholder="Hex"
            value={inputValueHex}
            onChange={(e) => setInputValueHex(e.target.value)}
            ref={inputRef}
            onClick={() => trimValue()}
          />
        </span>
        <button className="button-convert" type="submit">
          Convert
        </button>
        <input
          className="input-value-rgb"
          type="text"
          placeholder="Rgb"
          value={inputValueRgb}
          onChange={(e) => setInputValueRgb(e.target.value)}
          readOnly
        />{" "}
        <div
          className="background-rgb"
          style={{
            height: "100px",
            width: "200px",
            margin: "20px auto 0",
            backgroundColor: `${inputValueRgb}`,
          }}
        ></div>
      </form>

      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default ChangeColor;
