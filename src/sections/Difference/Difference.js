import React from "react";
import "./Difference.scss";
import cashBackImage1 from "../../assets/cashBackImage1.png";
import cashBackImage2 from "../../assets/cashBackImage2.png";
import pebble1 from "../../assets/rollingPebbleImage1.png";
import pebble2 from "../../assets/rollingPebbleImage2.png";
import { SimpleImg } from "react-simple-img";

const Difference = () => {
  return (
    <section className="Difference Difference-container">
      <div className="Difference-detail-1 flex-container">
        <div className="Difference-detail-1-description">
          <span className="second-title">OUR DIFFERENCE</span>
          <h1 className="first-title">Reinventing cash back</h1>
          <p>
            We're leveraging the <b>power of community</b> spending to go beyond
            small rewards and one-off incentives There 's still a change to earn
            on everyday purchases, but noe there's also a way for people
            everywhere to earn extra through a weave of friends, followers and
            other connections.
          </p>
        </div>
        <div className="Difference-detail-1-image">
          <SimpleImg
            placeholder="linear-gradient(180deg, #edb1b7 0%, #e9beae 70.93%, #e9d3c1 100%)"
            className="cashBackImage1"
            src={cashBackImage1}
            alt="reinventing cash back 1"
          />
          <SimpleImg
            placeholder="linear-gradient(180deg, #edb1b7 0%, #e9beae 70.93%, #e9d3c1 100%)"
            className="cashBackImage2"
            src={cashBackImage2}
            alt="reinventing cash back 2"
          />
        </div>
      </div>

      <div className="Difference-detail-2 flex-container">
        <div className="Difference-detail-2-image">
          <img className="pebble1" src={pebble2} alt="rolling pebble 2" />
          <img className="pebble1" src={pebble1} alt="rolling pebble 1" />
        </div>
        <div className="Difference-detail-2-description">
          <p>It's the difference between one rolling pebble & a landslide</p>
        </div>
      </div>
    </section>
  );
};

export default Difference;
