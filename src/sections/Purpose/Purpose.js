import React from "react";
import "./Purpose.scss";
// import cashBackImage1 from "../../assets/cashBackImage1.png";
// import cashBackImage2 from "../../assets/cashBackImage2.png";
// import pebble1 from "../../assets/rollingPebbleImage1.png";
// import pebble2 from "../../assets/rollingPebbleImage2.png";

const Purpose = () => {
  return (
    <section className="Purpose Purpose-container">
      <div className="Purpose-detail">
        <div className="Purpose-detail-description">
          <span className="second-title">OUR PURPOSE</span>
          <h1 className="first-title">Reinventing cash back</h1>
          <p>
            We're leveraging the <b>power of community</b> spending to go beyond
            small rewards and one-off incentives There 's still a change to earn
            on everyday purchases, but noe there's also a way for people
            everywhere to earn extra through a weave of friends, followers and
            other connections.
          </p>
        </div>
        <div className="Purpose-detail-image">
          <img
            className="cashBackImage1"
            src={cashBackImage1}
            alt="reinventing cash back 1"
          />
          <img
            className="cashBackImage2"
            src={cashBackImage2}
            alt="reinventing cash back 2"
          />
        </div>
      </div>
    </section>
  );
};

export default Purpose;
