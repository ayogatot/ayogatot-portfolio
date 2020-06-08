import React, { Fragment } from "react";
import Header from "../../Components/Header/Header";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";

import "./Home.css";
function Home() {
  return (
    <Fragment>
      <div className="main-bg-1">
        <Header />
        <Jumbotron />
      </div>
      <div className="main-bg-2">
        <p>Hello</p>
      </div>
    </Fragment>
  );
}

export default Home;
