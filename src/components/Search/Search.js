import React, { Component } from "react";
import "./Search.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      species: "",
      status: "",
      results: [],
      speciesResults: [],
      statusResults: [],
    };
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleNameSubmit = (event) => {
    event.preventDefault();
    const userInput = this.state.name;
    fetch(`https://rickandmortyapi.com/api/character?name=${userInput}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("nameSubmit", data);
        this.setState({
          results: data.results,
        });
      });
  };

  handleSpeciesChange = (event) => {
    this.setState({
      species: event.target.value,
    });
  };

  handleSpeciesSubmit = (event) => {
    event.preventDefault();
    const userInput = this.state.species;
    fetch(`https://rickandmortyapi.com/api/character?species=${userInput}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("speciesSubmit", data);
        this.setState({
          speciesResults: data.results,
        });
      });
  };

  handleStatusChange = (event) => {
    this.setState({
      status: event.target.value,
    });
  };

  handleStatusSubmit = (event) => {
    event.preventDefault();
    const userInput = this.state.status;
    fetch(`https://rickandmortyapi.com/api/character?status=${userInput}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("statusSubmit", data);
        this.setState({
          statusResults: data.results,
        });
      });
  };

  render() {
    const resultsItems = this.state.results.map((results, index) => {
      return <li key={`${results.name}-${index}`}>{results.name}</li>;
    });

    const speciesResultsItems = this.state.speciesResults.map(
      (results, index) => {
        return <li key={`${results.name}-${index}`}>{results.name}</li>;
      }
    );

    const statusResultsItems = this.state.statusResults.map(
      (results, index) => {
        return <li key={`${results.name}-${index}`}>{results.name}</li>;
      }
    );

    return (
      <Container fluid class="background">
        <div>
          <Row>
            <Col xs="auto"></Col>
            <Col xs="auto"></Col>
            <Col xs="auto"></Col>
            <Col>
              <Form onSubmit={this.handleNameSubmit}>
                <h2 class="heading-color">Search by Name:</h2>
                <Form.Label>Enter Character Name: </Form.Label>
                <input type="text" onChange={this.handleNameChange}></input>
                <input class="center" type="submit"></input>
              </Form>
              <ul class="center">{resultsItems}</ul>
            </Col>
            <Col xs="auto"></Col>
            <Col>
              <Form onSubmit={this.handleSpeciesSubmit}>
                <h2 class="heading-color">Search by Species:</h2>
                <label htmlFor="species">Enter Species: </label>
                <input type="text" onChange={this.handleSpeciesChange}></input>
                <input class="center" type="submit"></input>
              </Form>
              <ul>{speciesResultsItems}</ul>
            </Col>
            <Col xs="auto"></Col>
            <Col>
              <Form onSubmit={this.handleStatusSubmit}>
                <h2 class="heading-color">Search by Status:</h2>
                <label htmlFor="status">Enter Status: </label>
                <input type="text" onChange={this.handleStatusChange}></input>
                <input class="center" type="submit"></input>
              </Form>
              <ul>{statusResultsItems}</ul>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Search;
