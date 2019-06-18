import React from "react";
import "./TeamCard.scss";
import linkinIcon from "../../assets/linkinIcon.png";
import { SimpleImg } from "react-simple-img";

const TeamCard = prop => {
  const { img, name, title } = prop;

  return (
    <div className="card card-container simple-card column">
      <div className="card-detail">
        <SimpleImg
          height={320}
          width={270}
          placeholder="linear-gradient(180deg, #edb1b7 0%, #e9beae 70.93%, #e9d3c1 100%)"
          className="card-detail-image"
          src={img}
          applyAspectRatio
          alt="profile avatar"
        />
        <img
          className="card-detail-logo"
          src={linkinIcon}
          alt="linkedIn logo"
        />
      </div>

      <div className="card-header">
        <p className="card-header-name"> {name} </p>
        <p className="card-header-title">{title}</p>
      </div>
    </div>
  );
};

export default TeamCard;
