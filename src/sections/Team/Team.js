import React from "react";
import "./Team.scss";
import DouglasBraun from "../../assets/team/DouglasBraun.png";
import TeamCard from "../../components/TeamCard/TeamCard";

const Team = () => {
  return (
    <section className="Team Team-container">
      <div className="Team-content">
        <div className="Team-content-description">
          <span className="second-title">OUR PEOPLE</span>
          <h1 className="first-title is-size-3-mobile">Working For You</h1>
          <p className="title-caption">
            We're the Fluz team, an eclectic group of programers designers,
            communicators and facilitators who heart and soul believe in our app
          </p>
        </div>
        <div className="Team-content-cards columns">
          <TeamCard img={DouglasBraun} name="Name" title="title" />
          <TeamCard img={DouglasBraun} name="Name" title="title" />
          <TeamCard img={DouglasBraun} name="Name" title="title" />
        </div>
        <div className="Team-content-cards columns">
          <TeamCard img={DouglasBraun} name="Name" title="title" />
          <TeamCard img={DouglasBraun} name="Name" title="title" />
          <TeamCard img={DouglasBraun} name="Name" title="title" />
        </div>
        <div className="Team-content-cards columns">
          <TeamCard img={DouglasBraun} name="Name" title="title" />
          <TeamCard img={DouglasBraun} name="Name" title="title" />
          <TeamCard img={DouglasBraun} name="Name" title="title" />
        </div>
      </div>
    </section>
  );
};

export default Team;
