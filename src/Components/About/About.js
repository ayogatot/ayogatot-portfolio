import React from "react";
import { Row, Col, Container } from "reactstrap";

import Note from "../../assets/images/notebook.jpg";
import Team from "../../assets/images/team.png";
import Lightning from "../../assets/images/lightning.png";
import Thumb from "../../assets/images/thumb.png";

import "./about.css";

function About() {
  return (
    <Container className="a-py-10">
      <Row>
        <Col md="6">
          <img className="Image" src={Note} alt="Note" />
        </Col>
        <Col className="mx-auto Title" md="6">
          <p className="Me-1">About Me</p>
          <p className="Me-3">
            Mobile and Web Developer with a passion for challenging and learning
            everything. Still have 3+ years experience but already hands on many
            project like Ecommerce, Education Apps, Admin Dashboard etc.
          </p>
          <div className="d-flex align-items-center  pt-3">
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
          <div className="d-flex align-items-center  pt-4">
            <img className="Image-skill mr-2" src={Team} alt="Team Work" />
            <span className="Me-2">Team Work</span>
          </div>
          <a
            className="btn Hire-me mt-4"
            href="https://drive.google.com/file/d/1zLtFJ-CpTMqTnCx9r2xXP2KYw09yRFNK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </Col>
      </Row>
      {/* <Row className="pt-5">
        <Col className="mx-auto Title" md="8">
          <p className="About-P1">Any type of question &amp; discussion.</p>
          <p className="About-P2">Let's talk</p>
          <span className="Contact" href="mailto:azerino25@gmail.com">
            azerino25@gmail.com
          </span>
          <span className="Contact-2"> or </span>
          <span
            className="Contact"
            href="https://api.whatsapp.com/send?phone=62895360159807&text=Hello Azerino!"
          >
            +62 8953 6015 9807
          </span>
        </Col>
      </Row> */}
    </Container>
  );
}

export default About;
