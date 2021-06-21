import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/Characters/Characters";
import FruitInfo from "./components/Search/Search";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="navigationClass">
        <Navigation />
      </div>

      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/fruitInfo">
          <FruitInfo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
