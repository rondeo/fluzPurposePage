import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/fluzLogo.svg";
import { Link } from "react-router-dom";

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
          <Link to="/" className="navbar-item is-size-6-mobile">
            ABOUT
          </Link>
          <Link
            to="how-it-works"
            className="navbar-item is-size-6-mobile"
            href="/"
          >
            HOW IT WORKS
          </Link>
          <Link
            to="/"
            className=" navbar-item s-size-6-mobile start-button button is-rounded"
            href="/"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
