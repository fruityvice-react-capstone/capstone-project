import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Navigation.css";

import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";

class Navigation extends Component {
  randomNumber() {
    const min = 1;
    const max = 671;
    let randomNum = (Math.random() * (max - min) + min).toFixed(0);
    return randomNum;
  }
  render() {
    return (
      <div className="Navigation-container">
        <Container fluid>
          <Row>
            <Col>
              <Link className="li-link-color" to="/">
                Home
              </Link>
            </Col>
            <Col>
              <Link className="li-link-color" to="/characters">
                Characters
              </Link>
            </Col>
            <Col>
              <Link className="li-link-color" to="/search">
                Search
              </Link>
            </Col>
            <Col>
              <Button

                className="li-link-color"

                component={Link}
                to={`/characters/${this.randomNumber()}`}
              >
                <p>Random Character</p>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navigation;
