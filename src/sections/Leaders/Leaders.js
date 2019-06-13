import React from "react";
import "./Leaders.scss";
import LeaderCard from "../../components/LeaderCard/LeaderCard";
import andreas from "../../assets/ANDREAS-ANTRUP.png";

const logos = Array.apply(null, Array(12)).map((logo, index) => (
  <div key={index} className="Leaders-logos-logo">
    <img
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
