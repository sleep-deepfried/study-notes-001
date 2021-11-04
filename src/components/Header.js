import React from "react";
import "./Header.css";
import logo from "../assets/Logo-1.PNG";
function Header() {
  return (
    <div>
      <div class="header">
        <a href="#default">
          <img class="logo" src={logo} alt="logo" width="170px"></img>
        </a>
        <div class="header-right">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
