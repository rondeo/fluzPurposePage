import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import Intro from "./sections/Intro/Intro";
import Difference from "./sections/Difference/Difference";
import Leaders from "./sections/Leaders/Leaders";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Intro />
      <Difference />
      <Leaders />
    </div>
  );
}

export default App;
