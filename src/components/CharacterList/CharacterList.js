import React, { Component } from "react";

import { Link } from "react-router-dom";

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterName: "",
      characterArray: [],
      pageTotal: 0,
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pageTotal: data.info.pages,
        });
        console.log("pages", this.state.pageTotal);
      });
  }
  getCharacters() {
    for (let page = 1; page <= this.state.pageTotal; page++) {
      fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("characters", data);
          this.setState({
            characterArray: data.results,
          });
        });
    }
    return this.state.characterArray;
  }

  render() {
    console.log(this.state.characterArray);
    // const characterItemList = this.characterArray.map((data, index) => {
    //   return (
    //     <li key={`${data.id}-${index}`}>
    //       <Link to={data.id}>{data.name}</Link>
    //     </li>
    //   );
    // });
    return (
      <div>
        <nav>
          <ul>
            <li>A</li>
          </ul>
        </nav>
        <body>{/* <ul>{characterItemList}</ul> */}</body>
      </div>
    );
  }
}

export default CharacterList;
