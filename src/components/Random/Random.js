import React, { Component } from "react";

class Random extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      species: "",
      type: "",
      status: "",
    };
  }

  randomNumber = () => {
    const min = 1;
    const max = 671;
    return (Math.random() * (max - min) + min).toFixed(0);
  };

  componentDidMount() {
    console.log("this is the componentDidMount");

    fetch(`https://rickandmortyapi.com/api/character/${this.randomNumber()}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("random character", data);
      });
  }

  render() {
    return (
      <div>
        <h2>This is the Random Component!</h2>
        <p>This will hold character image</p>
        <p>Name</p>
        <p>Species</p>
        <p>Type</p>
        <p>Status</p>
      </div>
    );
  }
}

export default Random;
