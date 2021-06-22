import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Characters from "./components/Characters/Characters";
import Search from "./components/Search/Search";
import CharacterList from "./components/CharacterList/CharacterList";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="navigationClass">
        <Navigation />
      </div>
      <CharacterList />
      {/* <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <Characters />
        </Route>
        <Route exact path="/fruitInfo">
          <Search />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
