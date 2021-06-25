import React, { Component } from "react";
// import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import { Link } from "react-router-dom";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Form from "react-bootstrap/Form";
// import { FormControl } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer-container Jumbotron-class">
        {/* <Jumbotron fluid>
          <Container>
            <div>
              <Image src="/images/footer1.png" fluid className="FooterImage" />
            </div>
          </Container>
        </Jumbotron> */}
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Netflix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="https://www.instagram.com/rickandmorty/">
                  Instagram
                </Nav.Link>
                <Nav.Link href="https://m.facebook.com/RickandMorty/n">
                  Facebook
                </Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Footer;
