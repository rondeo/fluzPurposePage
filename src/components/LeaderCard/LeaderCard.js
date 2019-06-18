import React, { useState } from "react";
import "./LeaderCard.scss";
import linkinIcon from "../../assets/linkinIcon.png";
import { CSSTransition } from "react-transition-group";
import { SimpleImg } from "react-simple-img";

const LeaderCard = props => {
  const { img, name, company, title, detail } = props;
  const [show, setShow] = useState(false);

  return (
    <div className="card card-container column">
      <div className="card-header">
        <p className="card-header-name">{name}</p>
        <img src={linkinIcon} alt="linkedIn logo" />
      </div>

      <SimpleImg
        height={320}
        width={270}
        placeholder="linear-gradient(180deg, #edb1b7 0%, #e9beae 70.93%, #e9d3c1 100%)"
        className="card-image"
        src={img}
        applyAspectRatio
        alt="profile avatar"
      />
      <p className="card-company"> {company} </p>

      <div className="card-detail">
        <div onClick={() => setShow(!show)} className="card-detail-title">
          {" "}
          <span className={show ? "active arrow" : " arrow "}>{title}</span>
        </div>

        <CSSTransition
          in={show}
          timeout={300}
          classNames="detail"
          unmountOnExit
        >
          {detail}
        </CSSTransition>

        {/* {show ? <p className="card-detail-title-more"> {detail} </p> : null} */}
      </div>
    </div>
  );
};

export default LeaderCard;
