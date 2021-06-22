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

  //this function sorts through and alphabetizes the objects within the array in the json file
  dynamicSort(property) {
    let sortOrder = 1;

    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a, b) {
      if (sortOrder === -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    };
  }
  splitAlphabet() {
    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].name.charAt(0) !== jsonData[i + 1].name.charAt(0)) {
        return <h2>{jsonData[i].name.charAt(0)}</h2>;
      }
    }
  }

  render() {
    jsonData.sort(this.dynamicSort("name"));
    console.log(jsonData);
    const characterItemList = jsonData.map.forEach((data, index) => {
      if (data.name.charAt(0) !== data.name.charAt(0)) {
        return <h2>{data.name.charAt(0)}</h2>;
      } else {
        return (
          <li key={`${data.id}-${index}`}>
            <Link to={`/${data.id}`}>{data.name}</Link>
          </li>
        );
      }
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
