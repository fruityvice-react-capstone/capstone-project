import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Characters from "./components/Characters/Characters";
import Search from "./components/Search/Search";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="headerClass">
        <Header />
      </div>
      <div className="navigationClass">
        <Navigation />
      </div>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/characters">
          <Characters />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
