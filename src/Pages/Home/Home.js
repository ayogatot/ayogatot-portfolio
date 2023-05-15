import React, { Fragment } from "react";
import Header from "../../Components/Header/Header";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";
import AboutSection from "../../Components/About/About";
import AboutEndSection from "../../Components/AboutEnd";
import TechStack from "../../Components/Tech/Tech";
import Contact from "../../Components/Contact/Contact";

import "./Home.css";
function Home() {
  return (
    <Fragment>
      <div className="main-bg-1">
        <Header />
        <Jumbotron />
      </div>
      <div id="about-me" className="main-bg-2">
        <AboutSection />
      </div>
      <div className="main-bg-1">
        <Contact />
      </div>
      <div id="about-me" className="main-bg-2">
        <TechStack />
      </div>
      <div id="about-me" className="main-bg-2">
        <AboutEndSection />
      </div>
    </Fragment>
  );
}

export default Home;
