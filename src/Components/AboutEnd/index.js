import React from "react";
import { Row, Col, Container } from "reactstrap";

import "./about.css";

function About() {
  return (
    <Container>
      <Row className="py-5">
        <Col className="mx-auto Title" md="8">
          <p className="About-P1">Any type of question &amp; discussion.</p>
          <p className="About-P2">Let's talk</p>
          <span className="Contact" href="mailto:azerino25@gmail.com">
            azerino25@gmail.com
          </span>
          <span className="Contact-2"> or </span>
          <span
            className="Contact"
            onClick={() => window.open("https://api.whatsapp.com/send?phone=62895360159807&text=Hello Azerino!", "_blank")}
          >
            +62 8953 6015 9807
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
