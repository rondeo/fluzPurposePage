import React from "react";
import "./TeamCard.scss";
import linkinIcon from "../../assets/linkinIcon.png";
import { SimpleImg } from "react-simple-img";

const TeamCard = prop => {
  const { img, name, title } = prop;

  return (
    <div className="card card-container simple-card">
      <div className="card-detail">
        <SimpleImg
          className="card-detail-mage"
          src={img}
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
