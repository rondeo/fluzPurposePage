import React, { useState } from "react";
import "./LeaderCard.scss";
import linkinIcon from "../../assets/linkinIcon.png";

const LeaderCard = prop => {
  const { img, name, company, title, detail } = prop;
  const [show, setShow] = useState(0);

  return (
    <div className="card card-container">
      <div className="card-header">
        <p className="card-header-name"> {name} </p>
        <img src={linkinIcon} alt="linkedIn logo" />
      </div>

      <img className="card-image" src={img} alt="profile avatar" />
      <p className="card-company"> {company} </p>

      <div className="card-detail">
        <div onClick={() => setShow(!show)} className="card-detail-title">
          {" "}
          {title}{" "}
        </div>
        {show ? <p className="card-detail-title-more"> {detail} </p> : null}
      </div>
    </div>
  );
};

export default LeaderCard;
