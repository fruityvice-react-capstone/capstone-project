import React, { Component } from "react";
import { Link } from "react-router-dom";

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

  render() {
    return (
      <div>
        <p>
          <Link to={`/${this.randomNumber()}`}></Link>
        </p>
      </div>
    );
  }
}

export default Random;
