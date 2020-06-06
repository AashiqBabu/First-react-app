import React from "react";
import "./header.css";

const navBar = () => {
  return (
    <div id="navbar" className="w3-bar ">
      <a className="w3-bar-item w3-button w3-theme active" href="/">
        Day
      </a>

      <a
        className="w3-bar-item w3-button w3-hover-text-white w3-theme"
        href="/"
      >
        Week
      </a>

      <a
        className="w3-bar-item w3-button w3-hover-text-white w3-theme"
        href="/"
      >
        Month
      </a>
    </div>
  );
};
export default navBar;
