import React from "react";
import { Row, Col, Container } from "reactstrap";
// import Phone from "../../assets/images/phone.jpg";
import "./contact.css";

const portfolioData = [
  {
    id: 4,
    name: "Portal Visiteliti - Next.js",
    description:
      "Vision Teliti Saksama is a provider of management studies and consulting services in the social, economic and environmental fields",
    source: "https://www.portal.visiteliti.com/?lang=en",
    role: "Frontend Web",
  },

  {
    id: 1,
    name: "IBFnex - React & Express",
    description:
      "IBFnex is a blockchain platform with several features such as creating campaigns, creating nft and buying and selling nft using algorand environment",
    source: "https://ibfnex.io/",
    role: "Frontend Web & Backend",
  },
  {
    id: 0,
    name: "Edot - React Native",
    description:
      "EDOT is a super application to meet your entertainment, lifestyle and business needs, which is equipped with various features to support your many activities. ",
    source:
      "https://play.google.com/store/apps/details?id=com.pmaapp.ehashtag&hl=en&gl=US",
    role: "Mobile",
  },
  {
    id: 2,
    name: "Bepinion - React & Express",
    description:
      "Bepinion is a platform for meeting project owners and consultants / freelancers",
    source: "https://bepinion.com/",
    role: "Frontend Web & Backend",
  },
  {
    id: 3,
    name: "K-Link - Express + Elasticsearch",
    description: "K-Link is a ecommerce platform for klink group",
    source: "https://play.google.com/store/apps/details?id=com.klink.kmart",
    role: "Backend",
  },
  {
    id: 5,
    name: "IBF Dashboard - React & Express",
    description: "Admin dashboard for IBFNEX",
    source: "https://dashboard.ibf.exchange/login",
    role: "Web & Backend",
  },
];

function Contact() {
  return (
    <Container className='a-py-10'>
      <p className='C2'>My Portfolio</p>
      <Row>
        {/* <Col md="6">
          <p className="C1">Let's stay in touch</p>
          <p className="C3">
            Feel free to contact me for further information or discuss something
            interesting.
          </p>
          <img className="Phone" src={Phone} alt="Phone" />
          <Row className="pt-4">
            <Col className="Socmed" md="6" xs="6">
              <a
                className="Icon"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/azerino.gatot"
              >
                <i className="fab fa-facebook" />
              </a>
              <a
                className="Icon ml-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/azerino-yogananta-gatot-subroto-47514716b/"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                className="Icon ml-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/ayogatot"
              >
                <i className="fab fa-twitter-square" />
              </a>
              <a
                className="Icon ml-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/ayogatot/"
              >
                <i className="fab fa-instagram" />
              </a>
            </Col>
          </Row>
        </Col> */}
        <Col md='6'>
          {portfolioData.slice(0, 3).map((i) => {
            return (
              <div className='portfolio-container' id={i.id}>
                <p
                  onClick={() => window.open(i.source, "_blank")}
                  className='portfolio-title'
                >
                  <b>{i.name} &#x279A;</b>
                </p>
                <p className='C3'>{i.description}</p>
              </div>
            );
          })}
        </Col>
        <Col md='6'>
          {portfolioData.slice(3).map((i) => {
            return (
              <div className='portfolio-container' id={i.id}>
                <p
                  onClick={() => window.open(i.source, "_blank")}
                  className='portfolio-title'
                >
                  <b>{i.name} &#x279A;</b>
                </p>
                <p className='C3'>{i.description}</p>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
