import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";


class Navigation extends Component {
  randomNumber = () => {
    const min = 1;
    const max = 671;
    return (Math.random() * (max - min) + min).toFixed(0);
  };
  render() {
    return (
      <div className="Navigation-container">
        <Container fluid>
          <Row>
            <Col>
              <Link to="/">Home</Link>
            </Col>
            <Col>
              <Link to="/characters">Characters</Link>
            </Col>
            <Col>
              <Link to="/search">Search</Link>
            </Col>
            <Col>

              <Button component={Link} to={`/characters/${this.randomNumber}`}>
                Random Character
              </Button>

            </Col>
           
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Navigation);
