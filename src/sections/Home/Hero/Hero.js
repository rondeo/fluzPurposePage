import React from "react";
import "./Hero.scss";
import phoneImage from "../../../assets/Phone-white-matte.png";
import coin1 from "../../../assets/coin1.png";
import coin2 from "../../../assets/coin2.png";
import heart from "../../../assets/heart.png";
import { SimpleImg } from "react-simple-img";
import Tween from "rc-tween-one";

const Hero = () => {
  return (
    <section className="hero hero-container columns">
      <div className="hero-text column is-one-third columns">
        <h1 className="is-size-1">Cashback</h1>
        <h2 className="is-size-3 is-size-4-mobile">
          You didn't even know was possible
        </h2>
        <a className="hero-text-button button is-rounded" href="/">
          EXPLORE
        </a>
      </div>
      <div className="hero-image column is-hidden-mobile">
        <Tween
          animation={[
            { opacity: 1, duration: 2000 },
            {
              translateX: -10,
              // translateY: -10,
              translateZ: 5,
              rotateX: -15,
              rotateY: 10,
              rotateZ: 10,
              repeat: -1,
              duration: 2000,
              yoyo: true
            }
          ]}
          style={{
            opacity: 0,
            position: "absolute",
            top: "50%",
            right: "70%",
            transform: "perspective(250px) rotateY(10deg) "
          }}
        >
          <SimpleImg
            className="hero-image-coin"
            placeholder="linear-gradient(180deg, #edb1b7 0%, #e9beae 70.93%, #e9d3c1 100%)"
            src={coin1}
            alt="phone white matte"
          />
        </Tween>

        <Tween
          animation={[
            { opacity: 1, duration: 2500 },
            {
              translateX: -10,
              rotateX: -10,
              repeat: -1,
              duration: 3000,
              yoyo: true
            }
          ]}
          style={{
            opacity: 0,
            position: "absolute",
            top: "25%",
            right: "5%",
            width: "80px",
            transform: "perspective(200px) rotateY(0deg)"
          }}
        >
          <SimpleImg
            className="hero-image-coin"
            placeholder="linear-gradient(180deg, #edb1b7 0%, #e9beae 70.93%, #e9d3c1 100%)"
            src={heart}
            alt="phone white matte"
          />
        </Tween>

        <Tween
          animation={[
            { opacity: 1, duration: 1500 },
            {
              translateX: 0,
              translateY: 0,
              rotateX: 20,
              rotateY: -180,
              repeat: -1,
              duration: 1500,
              yoyo: true
            }
          ]}
          style={{
            opacity: 0,
            position: "absolute",
            top: "70%",
            right: "30%",
            width: "70px"

            // transform: "perspective(300px) rotateY(50deg)"
          }}
        >
          <SimpleImg
            className="hero-image-coin"
            placeholder="linear-gradient(180deg, #edb1b7 0%, #e9beae 70.93%, #e9d3c1 100%)"
            src={coin2}
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
