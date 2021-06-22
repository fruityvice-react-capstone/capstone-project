import React, { Component } from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
class Header extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
                <div className="headerImage">
                  <Image src="/images/rick-and-morty-logo.png" fluid />
                </div>
          </Container>
        </Jumbotron>
      </div>



    );
  }
}

export default Header;
