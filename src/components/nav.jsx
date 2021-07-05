import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import L1 from "../images/l1.png";
import L2 from "../images/l2.png";
export default ({ hasBlue }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="oasjfefdf jansksfdg">
        <Navbar.Brand href="#home">
          <img src={L1} />
          <img className="ml-2" src={L2} />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto sdfsdimier">
            <Nav.Link href="#features" className="active">
              Home
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
          </Nav>
          <Nav>
            <button
              className="btn "
              className={`${hasBlue == true ? "jeofjeaf1" : "jeofjeaf1"}`}
            >
              Contact Kyle
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
