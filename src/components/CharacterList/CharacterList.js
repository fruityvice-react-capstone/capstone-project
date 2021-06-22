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
  render() {
    jsonData.sort(this.dynamicSort("name"));
    console.log(jsonData);
    let aArray = jsonData.filter((data) => data.name.startsWith("A"));
    let bArray = jsonData.filter((data) => data.name.startsWith("B"));
    let cArray = jsonData.filter((data) => data.name.startsWith("C"));
    let dArray = jsonData.filter((data) => data.name.startsWith("D"));
    let eArray = jsonData.filter((data) => data.name.startsWith("E"));
    let fArray = jsonData.filter((data) => data.name.startsWith("F"));
    let gArray = jsonData.filter((data) => data.name.startsWith("G"));
    let hArray = jsonData.filter((data) => data.name.startsWith("H"));
    let iArray = jsonData.filter((data) => data.name.startsWith("I"));
    let jArray = jsonData.filter((data) => data.name.startsWith("J"));
    let kArray = jsonData.filter((data) => data.name.startsWith("K"));
    let lArray = jsonData.filter((data) => data.name.startsWith("L"));
    let mArray = jsonData.filter((data) => data.name.startsWith("M"));
    let nArray = jsonData.filter((data) => data.name.startsWith("N"));
    let oArray = jsonData.filter((data) => data.name.startsWith("O"));
    let pArray = jsonData.filter((data) => data.name.startsWith("P"));
    let qArray = jsonData.filter((data) => data.name.startsWith("Q"));
    let rArray = jsonData.filter((data) => data.name.startsWith("R"));
    let sArray = jsonData.filter((data) => data.name.startsWith("S"));
    let tArray = jsonData.filter((data) => data.name.startsWith("T"));
    let uArray = jsonData.filter((data) => data.name.startsWith("U"));
    let vArray = jsonData.filter((data) => data.name.startsWith("V"));
    let wArray = jsonData.filter((data) => data.name.startsWith("W"));
    let xArray = jsonData.filter((data) => data.name.startsWith("X"));
    let yArray = jsonData.filter((data) => data.name.startsWith("Y"));
    let zArray = jsonData.filter((data) => data.name.startsWith("Z"));
    let numArray = jsonData.filter((data) => data.name.startsWith("8"));

    return (
      <div>
        <body>
          <ul>
            <p>A</p>
            {aArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>B</p>
            {bArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>C</p>
            {cArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>D</p>
            {dArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>E</p>
            {eArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>F</p>
            {fArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>G</p>
            {gArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>H</p>
            {hArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>I</p>
            {iArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>J</p>
            {jArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>K</p>
            {kArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>L</p>
            {lArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>M</p>
            {mArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>N</p>
            {nArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>O</p>
            {oArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>P</p>
            {pArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>Q</p>
            {qArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>R</p>
            {rArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>S</p>
            {sArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>T</p>
            {tArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>U</p>
            {uArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>V</p>
            {vArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>W</p>
            {wArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>X</p>
            {xArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>Y</p>
            {yArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>Z</p>
            {zArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <p>#</p>
            {numArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
        </body>
      </div>
    );
  }
}

export default CharacterList;
