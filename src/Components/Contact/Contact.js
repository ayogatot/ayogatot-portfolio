import React from "react";
import { Row, Col, Container } from "reactstrap";
import Phone from "../../assets/images/phone.jpg";
import "./contact.css";

function Contact() {
  return (
    <Container className="a-py-10">
      <Row>
        <Col md="6">
          <p className="C1">Let's stay in touch</p>
          <p className="C3">
            Feel free to contact me for further information or discuss something
            interesting.
          </p>
          <img className="Phone" src={Phone} alt="Phone" />
          <Row className="pt-4">
            <Col md="6">
              <p className="C3 pt-1">Follow Me at</p>
            </Col>
            <Col className="text-right Socmed" md="6">
              <a
                className="Icon"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/azerino.gatot"
              >
                <i className="fab fa-facebook ml-2" />
              </a>
              <a
                className="Icon"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/azerino-yogananta-gatot-subroto-47514716b/"
              >
                <i className="fab fa-linkedin ml-2" />
              </a>
              <a
                className="Icon"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/ayogatot"
              >
                <i className="fab fa-twitter-square ml-2" />
              </a>
              <a
                className="Icon"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/ayogatot/"
              >
                <i className="fab fa-instagram ml-2" />
              </a>
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <p className="C2">Let me know here</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
