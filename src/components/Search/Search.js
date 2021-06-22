import React, { Component } from "react";

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
      <div>
        <form onSubmit={this.handleNameSubmit}>
          <h2>Search by Name:</h2>
          <label htmlFor="name">Enter Character Name: </label>
          <input type="text" onChange={this.handleNameChange}></input>
          <input type="submit"></input>
        </form>
        <ul>{resultsItems}</ul>

        <form onSubmit={this.handleSpeciesSubmit}>
          <h2>Search by Species:</h2>
          <label htmlFor="species">Enter Species: </label>
          <input type="text" onChange={this.handleSpeciesChange}></input>
          <input type="submit"></input>
        </form>
        <ul>{speciesResultsItems}</ul>

        <form onSubmit={this.handleStatusSubmit}>
          <h2>Search by Status:</h2>
          <label htmlFor="status">Enter Status: </label>
          <input type="text" onChange={this.handleStatusChange}></input>
          <input type="submit"></input>
        </form>
        <ul>{statusResultsItems}</ul>

      </div>
    );
  }
}

export default Search;
