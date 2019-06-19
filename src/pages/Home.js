import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Hero from "../sections/Home/Hero/Hero";
import Intro from "../sections/Home/Intro/Intro";
import Difference from "../sections/Home/Difference/Difference";
import Purpose from "../sections/Home/Purpose/Purpose";
import Leaders from "../sections/Home/Leaders/Leaders";
import Vision from "../sections/Home/Vision/Vision";
import Team from "../sections/Home/Team/Team";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Intro />
      <Difference />
      <Purpose />
      <Vision />
      <Leaders />
      <Team />
    </Fragment>
  );
};

export default Home;
