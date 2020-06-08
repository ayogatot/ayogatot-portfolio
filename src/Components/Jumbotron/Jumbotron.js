import React from "react";
import { Row, Col, Container, Button } from "reactstrap";
import Me from "../../assets/images/me-1.png";
import "./jumbotron.css";

function Jumbotron() {
  return (
    <Container>
      <Row>
        <Col className="mt-auto mb-auto Title" md="6">
          <p className="P1">Hello !</p>
          <p className="P2">I'm Azerino Y. Gatot S.</p>
          <p className="P3">Freelance, Mobile and Website Developer</p>
          <p className="P4">
            There is no code like no code. That is, a solution that involves no
            code at all is often the best solution.
          </p>
          <Button className="Hire-me">Hire Me</Button>
        </Col>
        <Col className="ml-auto" md="6">
          <img className="ml-5" src={Me} alt="Me" />
        </Col>
      </Row>
    </Container>
  );
}

export default Jumbotron;
