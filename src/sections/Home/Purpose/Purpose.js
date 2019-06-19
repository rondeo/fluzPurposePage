import React from "react";
import "./Purpose.scss";
import fundingDream from "../../../assets/fundingDream.png";

const Purpose = () => {
  return (
    <section className="Purpose Purpose-container">
      <div className="Purpose-detail flex-container columns">
        <div className="Purpose-detail-description column">
          <span className="second-title">OUR PURPOSE</span>
          <h1 className="first-title">Funding your dreams</h1>
          <p>
            We're leveraging the <b>power of community</b> spending to go beyond
            small rewards and one-off incentives There 's still a change to earn
            on everyday purchases, but noe there's also a way for people
            everywhere to earn extra through a weave of friends, followers and
            other connections.
          </p>
        </div>
        <div className="Purpose-detail-image column">
          <img
            className="fundingDream"
            src={fundingDream}
            alt="Funding Your Dream"
          />
        </div>
      </div>
    </section>
  );
};

export default Purpose;
