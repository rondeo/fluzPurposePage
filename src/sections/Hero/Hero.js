import React from "react";
import "./Hero.scss";
import phoneImage from "../../assets/Phone-white-matte.png";

const Hero = () => {
  return (
    <section className="hero hero-container">
      <div className="hero-text">
        <h1>Cashback</h1>
        <h2>You didn't even know was possiable</h2>
        <div className="hero-text-button">
          <a href="/">
            <span>Explore</span>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={phoneImage} alt="phone white matte" />
      </div>
    </section>
  );
};

export default Hero;
