import React from "react";
import "./Leaders.scss";
import LeaderCard from "../../../components/LeaderCard/LeaderCard";
import andreas from "../../../assets/leaders/ANDREAS-ANTRUP.png";
import Anil from "../../../assets/leaders/Anil-Benard-Dende.png";
import che from "../../../assets/leaders/CHE-POPE.png";
import karl from "../../../assets/leaders/KARL-KARLSSON.png";
import michael from "../../../assets/leaders/Michael-Rosen.png";
import stephen from "../../../assets/leaders/STEPHEN-NORRIS.png";

const logos = Array.apply(null, Array(12)).map((logo, index) => (
  <div key={index} className="Leaders-logos-logo">
    <img
      src={require(`../../../assets/logos/logo${index}.png`)}
      alt="company logo"
    />
  </div>
));

const anilDetail = () => {
  return (
    <ul className="anilDetail">
      <li>Cdiscount, COO</li>
      <li>Cdiscount, International & Advertising VP</li>
      <li>Groupe Casino, Director of Methods and organization</li>
      <li>PPR(Kering) Group, Supply Chain Manager</li>
      <li>PwC Consulting, Senior Consultant</li>
    </ul>
  );
};

const Leaders = () => {
  return (
    <section className="Leaders Leaders-container">
      <div className="Leaders-description">
        <span className="second-title">OUR LEADERS</span>
        <h1 className="first-title is-size-3-mobile">Proven groundbreakers</h1>
        <p className="title-caption">
          Our leaders are not only dreamers - they are doers. We've bought in a
          top team of <b>social and financial powerhouses</b> to make Fluz a
          household name.
        </p>
      </div>

      <div className="Leaders-cards columns">
        <LeaderCard
          img={michael}
          name="MICHAEL ROSEN"
          company="Herbalife International"
          title="Former CMO"
          detail={anilDetail}
        />
        <LeaderCard
          img={karl}
          name="KARL KARLSSON"
          company="Sway Ventures"
          title="General Partner"
          detail={anilDetail}
        />
        <LeaderCard
          img={andreas}
          name="ANDREAS ANTRUP"
          company="Zolando"
          title="VP of Data & Advertising"
          detail={anilDetail}
        />
      </div>
      <div className="Leaders-cards columns">
        <LeaderCard
          img={Anil}
          name="ANIL BENARD-DENDE"
          company="Showroom Prive"
          title="Deputy CEO"
          detail={anilDetail}
        />
        <LeaderCard
          img={che}
          name="CHE POPE"
          company="G.O.O.D Music"
          title="Artists & Influencers"
          detail={anilDetail}
        />
        <LeaderCard
          img={stephen}
          name="STEPHEN NORRIS"
          company="Carlyle Group"
          title="Finance & strategy"
          detail={anilDetail}
        />
      </div>

      <div className="Leaders-logos">{logos}</div>
    </section>
  );
};

export default Leaders;
