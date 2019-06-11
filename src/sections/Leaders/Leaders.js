import React from "react";
import "./Leaders.scss";
import LeaderCard from "../../components/LeaderCard/LeaderCard";
import andreas from "../../assets/ANDREAS-ANTRUP.png";
// import cashBackImage2 from "../../assets/cashBackImage2.png";
// import pebble1 from "../../assets/rollingPebbleImage1.png";
// import pebble2 from "../../assets/rollingPebbleImage2.png";

const logos = Array.apply(null, Array(12)).map((logo, index) => (
  <div className="Leaders-logos-logo">
    <img
      key={index}
      src={require(`../../assets/logos/logo${index}.png`)}
      alt="company logo"
    />
  </div>
));

const Leaders = () => {
  return (
    <section className="Leaders Leaders-container">
      <div className="Leaders-description">
        <span className="second-title">OUR LEADERS</span>
        <h1 className="first-title">Proven groundbreakers</h1>
        <p className="title-caption">
          Our leaders are not only dreamers - they are doers. We've bought in a
          top team of social and financial powerhouses to make Fluz a househole
          name.
        </p>
      </div>

      <div className="Leaders-cards">
        <LeaderCard
          img={andreas}
          name="MICHAEL ROSEN"
          company="Herbalife International"
          title="Former CMO"
          detail="testing detail"
        />
        <LeaderCard
          img={andreas}
          name="MICHAEL ROSEN"
          company="Herbalife International"
          title="Former CMO"
        />
        <LeaderCard
          img={andreas}
          name="MICHAEL ROSEN"
          company="Herbalife International"
          title="Former CMO"
        />
      </div>

      <div className="Leaders-logos">{logos}</div>
    </section>
  );
};

export default Leaders;
