import React from "react";
import "./Vision.scss";
import unicorn from "../../assets/unicorn.png";
import bubbleunicorn1 from "../../assets/bubble-unicorn-1.png";
import bubbleunicorn2 from "../../assets/bubble-unicorn-2.png";
import { SimpleImg } from "react-simple-img";
import { CSSTransition } from "react-transition-group";

const Vision = () => {
  return (
    <section className="Vision  Vision-container">
      <div className="Vision-detail flex-container">
        <div className="Vision-detail-image">
          <SimpleImg
            height={450}
            placeholder="linear-gradient(180deg, #edb1b7 0%, #e9beae 70.93%, #e9d3c1 100%)"
            className="unicorn"
            src={unicorn}
            alt="Unicorn"
          />
          <SimpleImg
            height={120}
            placeholder="linear-gradient(180deg, #edb1b7 0%, #e9beae 70.93%, #e9d3c1 100%)"
            className="bubbleunicorn1"
            src={bubbleunicorn1}
            alt="Unicorn Bubble"
          />
          <SimpleImg
            height={120}
            placeholder="linear-gradient(180deg, #edb1b7 0%, #e9beae 70.93%, #e9d3c1 100%)"
            className="bubbleunicorn2"
            src={bubbleunicorn2}
            alt="Unicorn Bubble"
          />
        </div>
        <div className="Vision-detail-description">
          <span className="second-title">OUR VISION</span>
          <h1 className="first-title">We speak unicorn.</h1>
          <p>
            We’re driven to quickly become the most powerful social buying
            community in the world, and we’re challenging the status quo to do
            it. Our revolution begins with networks. Friends are our biggest
            influencers in what we like, what we do and where we go. People love
            sharing all the new ways to make life better. And we’re banking on
            that.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
