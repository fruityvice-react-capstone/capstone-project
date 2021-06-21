import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "blah" };
    this.testNav = this.testNav.bind(this);
  }
  testNav() {
    this.props.history.push("/about");
    console.log("this is being clicked");
  }
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* <Link to="/about">About</Link> */}
              <button onClick={this.testNav}>Characters</button>
            </li>
            <li>
              <Link to="/fruitapp">Fruit App</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navigation);
