import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer-container Jumbotron-class">
        <div>
          <Navbar bg="light" expand="lg">
            {/* <Navbar.Brand href="#home">Netflix</Navbar.Brand> */}
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="mr-auto">
              <Nav.Link href="https://www.instagram.com/rickandmorty/">
                Instagram
              </Nav.Link>
              <Nav.Link href="https://facebook.com/RickandMorty/">
                Facebook
              </Nav.Link>
            </Nav>
            {/* </Navbar.Collapse> */}
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Footer;
