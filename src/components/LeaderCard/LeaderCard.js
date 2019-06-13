import React, { useState } from "react";
import "./LeaderCard.scss";
import linkinIcon from "../../assets/linkinIcon.png";
import { CSSTransition } from "react-transition-group";
import { SimpleImg } from "react-simple-img";

const LeaderCard = prop => {
  const { img, name, company, title, detail } = prop;
  const [show, setShow] = useState(false);

  return (
    <div className="card card-container">
      <div className="card-header">
        <p className="card-header-name"> {name} </p>
        <img src={linkinIcon} alt="linkedIn logo" />
      </div>

      <SimpleImg className="card-image" src={img} alt="profile avatar" />
      <p className="card-company"> {company} </p>

      <div className="card-detail">
        <div onClick={() => setShow(!show)} className="card-detail-title">
          {" "}
          {title}{" "}
        </div>

        <CSSTransition
          in={show}
          timeout={300}
          classNames="detail"
          unmountOnExit
        >
          <p> {detail} </p>
        </CSSTransition>

        {/* {show ? <p className="card-detail-title-more"> {detail} </p> : null} */}
      </div>
    </div>
  );
};

export default LeaderCard;
