import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
    };
  }
  handleClick = () => {
    this.setState({
      number: this.randomNumber(),
    });
  };
  randomNumber() {
    const min = 1;
    const max = 671;
    return (Math.random() * (max - min) + min).toFixed(0);
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
                onClick={this.handleClick}
                className="li-link-color"
                component={Link}
                to={`/characters/${this.state.number}`}
              >
                Random Character
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navigation;
