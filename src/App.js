import "./App.css";
import Header from "./components/Header/Header";
// import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Characters from "./components/Characters/Characters";
import Search from "./components/Search/Search";
// import Random from "./components/Random/Random";
import CharacterList from "./components/CharacterList/CharacterList";
// import Container from "react-bootstrap/Container";
import Footer from "./components/Footer/Footer";

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
      <div className="navigationClass">
        <Header />
      </div>
      <hr></hr>
      <Switch>
        <Route exact path="/">
          <div className="carouselSize">
            <Home />
          </div>
        </Route>
        <Route exact path="/characters">
          <CharacterList />
        </Route>
        <Route exact path="/characters/:selectedId" component={Characters} />
        <Route exact path="/Search">
          <Search />
        </Route>
      </Switch>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
