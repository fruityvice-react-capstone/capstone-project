import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class Header extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              {" "}
              <h1>Rick & Morty</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;
