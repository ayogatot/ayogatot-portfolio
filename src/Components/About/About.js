import React from "react";
import { Row, Col, Container, Button } from "reactstrap";

import Note from "../../assets/images/notebook.jpg";
import Team from "../../assets/images/team.png";
import Lightning from "../../assets/images/lightning.png";
import Thumb from "../../assets/images/thumb.png";

import "./about.css";

function About() {
  return (
    <Container className="py-10">
      <Row>
        <Col md="6">
          <img className="Image" src={Note} alt="Note" />
        </Col>
        <Col className="mx-auto Title" md="6">
          <p className="Me-1">About Me</p>
          <p>
            Mobile and Web Developer from Indonesia with a passion for
            challenging and learning everything.
          </p>
          <div className="d-flex align-items-center  pt-4">
            <img className="Image-skill mr-2" src={Team} alt="Team Work" />
            <span className="Me-2">Team Work</span>
          </div>
          <div className="d-flex align-items-center  pt-4">
            <img
              className="Image-skill mr-2"
              src={Thumb}
              alt="Problem Solver"
            />
            <span className="Me-2">Problem Solver</span>
          </div>
          <div className="d-flex align-items-center pt-4">
            <img
              className="Image-skill mr-2"
              src={Lightning}
              alt="Fast Learner"
            />
            <span className="Me-2">Fast Learner</span>
          </div>
          <a
            class="btn Hire-me mt-4"
            href="https://drive.google.com/file/d/1w_CPNy5ucgiZb8ttBeJQZcvE_fA2iJLz/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col className="mx-auto Title" md="8">
          <p className="About-P1">Any type of question &amp; discussion.</p>
          <p className="About-P2">Let's talk</p>
          <a className="Contact" href="mailto:azerino25@gmail.com">
            azerino25@gmail.com
          </a>
          <span className="Contact-2"> or </span>
          <a
            className="Contact"
            href="https://api.whatsapp.com/send?phone=62895360159807&text=Hello Azerino!"
          >
            +62 8953 6015 9807
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
