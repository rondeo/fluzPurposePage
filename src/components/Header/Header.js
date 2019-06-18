import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/fluzLogo.svg";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="navbar nav-bar">
      <div className="nav-logo nav-brand ">
        <a href="/">
          <img src={logo} />
        </a>

        <button
          onClick={() => {
            setActive(!active);
          }}
          className={`button navbar-burger ${active ? "is-active" : ""}`}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`navbar-menu nav-bar-menu ${active ? "is-active" : ""}`}>
        <div className="navbar-end ">
          <a className="navbar-item is-size-6-mobile" href="/">
            ABOUT
          </a>
          <a className="navbar-item is-size-6-mobile" href="/">
            HOW IT WORKS
          </a>
          <a
            className=" navbar-item s-size-6-mobile start-button button is-rounded"
            href="/"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
