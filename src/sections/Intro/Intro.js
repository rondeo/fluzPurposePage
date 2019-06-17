import React from "react";
import "./Intro.scss";
import dialogueBubble from "../../assets/thinking.png";

const Intro = () => {
  return (
    <section className="Intro Intro-container columns">
      <div className="Intro-description column is-half-desktop is-two-thirds-tablet">
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
