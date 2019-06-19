import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import Howitworks from "./pages/HowItWorks";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/how-it-works" exact component={Howitworks} />
      </Router>
    </div>
  );
}

export default App;
