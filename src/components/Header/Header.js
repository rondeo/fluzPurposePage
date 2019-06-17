import React from "react";
import "./Header.scss";
import logo from "../../assets/fluzLogo.svg";

const Header = () => {
  return (
    <section className="nav nav-container columns is-mobile">
      <div className="nav-logo column">
        <a href="/">
          <img src={logo} />
        </a>
      </div>
      <div className="nav-main column is-two-thirds-tablet">
        <a className="start-button button is-rounded" href="/">
          GET STARTED
        </a>
        <a href="/">HOW IT WORKS</a>
        <a href="/">ABOUT</a>
      </div>
    </section>
  );
};

export default Header;
