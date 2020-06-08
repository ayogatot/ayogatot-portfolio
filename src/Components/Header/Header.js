import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container,
} from "reactstrap";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar light expand="md" className="pb-5">
        <NavbarBrand href="/">
          <span className="Brand-text">ayogatot</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mr-4" navbar>
            <NavItem>
              <NavLink href="#about-me">
                <span className="Nav-text">About me</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="#portfoilio">
                <span className="Nav-text">Portfolio</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="https://github.com/ayogatot">
                <span className="Nav-text">GitHub</span>
              </NavLink>
            </NavItem>
            <NavItem className="ml-2">
              <Button className="Hire-me">Hire Me</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
