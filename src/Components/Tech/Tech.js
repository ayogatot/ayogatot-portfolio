import React from "react";
import { Row, Col, Container } from "reactstrap";
import Mongo from "../../assets/images/mongo.png";
import Express from "../../assets/images/express.png";
import ReactLogo from "../../assets/images/react.png";
import Node from "../../assets/images/node.png";
import "./tech.css";

function Tech() {
  return (
    <Container className="py-10">
      <Row>
        <Col md="2" />
        <Col
          className="d-flex flex-column align-items-center justify-content-center"
          md="8"
        >
          <p className="T1">MERN</p>
          <p className="T2">STACK</p>
        </Col>
        <Col md="2" />
      </Row>
      <Row>
        <Col md="3" className="text-center">
          <img className="Image-stack" src={Mongo} alt="Mongo" />
        </Col>
        <Col md="3" className="my-auto">
          <img className="Express-image" src={Express} alt="Express" />
        </Col>
        <Col md="3" className="text-center">
          <img className="Image-stack" src={ReactLogo} alt="React" />
        </Col>
        <Col md="3" className="text-center">
          <img className="Image-stack" src={Node} alt="Node" />
        </Col>
      </Row>
      <Row className="pt-10">
        <Col md="6">
          <p className="Why-me">Why hire me for your project?</p>
        </Col>
        <Col md="6">
          <p className="C3 pt-3">
            I possess a comprehensive understanding of both
            <span className="Must-span"> front-end </span> and
            <span className="Must-span"> back-end </span> development, allowing
            me to seamlessly work across the entire technology stack. This
            versatility enables me to contribute to all aspects of a project,
            from <span className="Must-span"> designing </span> and{" "}
            <span className="Must-span"> implementing </span> user interfaces to
            developing robust server-side logic.
            {/* Honestly, I almost feel like the developing
            either <span className="Must-span">Website</span> or{" "}
            <span className="Must-span">Mobile</span> was written with me in
            mind. Besides I like new technology, I'm also a fast learner and
            dare to try something new. */}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Tech;
