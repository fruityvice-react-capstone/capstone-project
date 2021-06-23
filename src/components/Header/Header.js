import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navigation from "../Navigation/Navigation";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";

import "./Header.css";
class Header extends Component {
  render() {
    return (
      <div className="Header-container Jumbotron-class">
        <Jumbotron fluid>
          <Container>
            <div>
              <Image
                src="/images/rick-and-morty-logo.png"
                fluid
                className="headerImage"
              />
            </div>
          </Container>
          <hr></hr>
          <Navigation />
          <hr></hr>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
