import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import Intro from "./sections/Intro/Intro";
import Difference from "./sections/Difference/Difference";
import Purpose from "./sections/Purpose/Purpose";
import Leaders from "./sections/Leaders/Leaders";
import Vision from "./sections/Vision/Vision";
import Team from "./sections/Team/Team";

function App() {
  const pages = ["ABOUT", "HOW IT WORKS", "GET STARTED"];

  return (
    <div className="App">
      <Header pages={pages} />
      <Hero />
      <Intro />
      <Difference />
      <Purpose />
      <Vision />
      <Leaders />
      <Team />
    </div>
  );
}

export default App;
