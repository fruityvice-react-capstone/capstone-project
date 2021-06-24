import React, { Component } from "react";
import "./Characters.css";

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: {
        name: "",
        image: "",
        species: "",
        status: "",
        gender: "",
        origin: { name: "" },
      },
      // origin: {name: ""},
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
          // origin: data.origin,
        });
      });
  }
  render() {
    return (
      <section className="character-bio">
        <br></br>
        <h1>{this.state.characters.name}</h1>
        <img
          className="bio-pic"
          src={this.state.characters.image}
          alt={this.state.characters.name}
        ></img>
        <br></br>
        <p className="spec-detail-font">
          <strong className="specs-font">Species: </strong>
          {this.state.characters.species}
        </p>
        <p className="spec-detail-font">
          <strong className="specs-font">Status: </strong>
          {this.state.characters.status}
        </p>
        <p className="spec-detail-font">
          <strong className="specs-font">Gender: </strong>
          {this.state.characters.gender}
        </p>
        <p className="spec-detail-font">
          <strong className="specs-font">Origin: </strong>
          {this.state.characters.origin.name}
        </p>
      </section>
    );
  }
}

export default Characters;
