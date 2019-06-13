import React from "react";
import "./Intro.scss";
import dialogueBubble from "../../assets/thinking.png";

const Intro = () => {
  return (
    <section className="Intro flex-container Intro-container">
      <div className="Intro-description">
        <img src={dialogueBubble} />
        <p>
          In a world that makes so many demands on your money, we know how
          gratifying it is to get something back. Fluz is not just another cash
          back app. We're making it possible for friendship and influence to
          create real income opportunities for everyone
        </p>
      </div>
    </section>
  );
};

export default Intro;
