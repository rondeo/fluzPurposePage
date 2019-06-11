import React from "react";
import "./Header.scss";
import logo from "../../assets/fluzLogo.svg";

const Header = () => {
  return (
    <section className="nav nav-container">
      <div className="nav-logo">
        <a href="/">
          <img src={logo} />
        </a>
      </div>
      <div className="nav-main">
        <a href="/">GET STARTED</a>
        <a href="/">HOW IT WORKS</a>
        <a href="/">ABOUT</a>
      </div>
    </section>
  );
};

export default Header;
