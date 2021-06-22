import React, { Component } from "react";
import jsonData from "../../characters.json";

import { Link } from "react-router-dom";

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTotal: 0,
    };
  }

  //   componentDidMount() {
  //     this.allId();
  //     console.log(this.state.characterArray);
  //     fetch(`capstone-project\src\characters.json`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         this.setState({
  //           characterArray: data,
  //         });
  //         console.log("characters", this.state.characterArray);
  //       });
  //   }

  render() {
    console.log(jsonData);
    const characterItemList = jsonData.map((data, index) => {
      return (
        <li key={`${data.id}-${index}`}>
          <Link to={`/${data.id}`}>{data.name}</Link>
        </li>
      );
    });
    return (
      <div>
        <nav>
          <ul>
            <li>A</li>
          </ul>
        </nav>
        <body>
          <ul>{characterItemList}</ul>
        </body>
      </div>
    );
  }
}

export default CharacterList;
