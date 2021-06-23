import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Navigation.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation-container">
        <Container fluid>
          <Row>
            <Col>
              {" "}
              <Link to="/">Home</Link>{" "}
            </Col>
            <Col>
              <Link to="/characters">Characters</Link>
            </Col>
            <Col>
              {" "}
              <Link to="/search">Search</Link>{" "}
            </Col>
            <Col>
              {" "}
              <Link to="/random">Random</Link>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Navigation);
