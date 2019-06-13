import React from "react";
import "./Hero.scss";
import phoneImage from "../../assets/Phone-white-matte.png";
import coin1 from "../../assets/coin1.png";
import { SimpleImg } from "react-simple-img";
import Tween from "rc-tween-one";

const Hero = () => {
  return (
    <section className="hero flex-container hero-container">
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
        <Tween
          animation={[
            { opacity: 1, duration: 2000 },
            {
              translateX: 10,
              translateY: 10,
              rotateX: 20,
              rotateY: -25,
              repeat: -1,
              duration: 2000,
              yoyo: true
            }
          ]}
          style={{
            opacity: 0,
            position: "absolute",
            top: "75%",
            right: "40%",
            transform: "perspective(200px) rotateY(0deg)"
          }}
        >
          <SimpleImg
            className="hero-image-coin"
            placeholder="linear-gradient(180deg, #edb1b7 0%, #e9beae 70.93%, #e9d3c1 100%)"
            src={coin1}
            alt="phone white matte"
          />
        </Tween>

        <SimpleImg
          className="hero-image-content"
          height={450}
          placeholder="linear-gradient(180deg, #edb1b7 0%, #e9beae 70.93%, #e9d3c1 100%)"
          src={phoneImage}
          alt="phone white matte"
        />
      </div>
    </section>
  );
};

export default Hero;
