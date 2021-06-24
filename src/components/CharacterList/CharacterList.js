import React, { Component } from "react";
import jsonData from "../../characters.json";
import "./CharacterList.css";

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
      <div className="characterContainer">
        <div>
          <ul className="aContainer">
            <span>A</span>
            {aArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`} className="aContainer">
                  <Link to={`/characters/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul>
            <span>B</span>
            {bArray.map((data, index) => {
              return (
                <li key={`${data.id}-${index}`}>
                  <Link to={`/characters/${data.id}`}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul>
          <span>C</span>
          {cArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>D</span>
          {dArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>E</span>
          {eArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>F</span>
          {fArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>G</span>
          {gArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>H</span>
          {hArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>I</span>
          {iArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>J</span>
          {jArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>K</span>
          {kArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>L</span>
          {lArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>M</span>
          {mArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>N</span>
          {nArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>O</span>
          {oArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>P</span>
          {pArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>Q</span>
          {qArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>R</span>
          {rArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>S</span>
          {sArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>T</span>
          {tArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>U</span>
          {uArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>V</span>
          {vArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>W</span>
          {wArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/charactesr/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>X</span>
          {xArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>Y</span>
          {yArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>Z</span>
          {zArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <span>#</span>
          {numArray.map((data, index) => {
            return (
              <li key={`${data.id}-${index}`}>
                <Link to={`/characters/${data.id}`}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CharacterList;
