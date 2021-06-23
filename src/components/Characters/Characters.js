import React, { Component } from "react";

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: {name: "", image: "", species: "", status: "", gender: ""},
      origin: {name: ""},
    };
  }
  componentDidMount() {
    const selectedId = this.props.match.params.selectedId;
    fetch(`https://rickandmortyapi.com/api/character/${selectedId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("character bio", data);
        this.setState({
          characters: data,
          origin: data.origin,
        });
      });
  }
  render() {
    return (
      <div>
        <h2>Name:{this.state.characters.name}</h2>
        <img
          src={this.state.characters.image}
          alt={this.state.characters.name}
        ></img>
        <br></br>
        <strong>Species:{this.state.characters.species}</strong>
        <br></br>
        <strong>Status:{this.state.characters.status}</strong>
        <br></br>
        <strong>Gender:{this.state.characters.gender}</strong>
        <br></br>
        <strong>Origin:{this.state.origin.name}</strong>
      </div>
    );
  }
}

export default Characters;
