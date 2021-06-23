import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Characters from "./components/Characters/Characters";
import Search from "./components/Search/Search";
// import Random from "./components/Random/Random";
import CharacterList from "./components/CharacterList/CharacterList";
// import Container from "react-bootstrap/Container";

import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>;

function App() {
  return (
    <div className="App">
      <div className="headerClass">
        <Header />
      </div>
      <div className="bodyComponents">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/characters">
            <CharacterList />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/characters/:selectedId" component={Characters} />
          {/* no longer needed using materials-ui
        <Route path="/random">
          <Random />
        </Route> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
