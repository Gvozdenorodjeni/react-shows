import "./App.scss";
import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Cards from "./components/Cards/Cards";
import SingleShow from "./Pages/SingleShow/SingleShow";

export const showsContext = React.createContext({});

function App() {
  const { Provider: ShowsProvider } = showsContext;

  const [shows, setShows] = useState([]);
  const [id, setId] = useState(false);

  function GetId(e) {
    setId(e.id);
  }

  useEffect(() => {
    fetch("http://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);
  return (
    <div className="App">
      <div className="headerWrapper">
        <header>
          <Link className="home" to="/">
            <p id="ASD">React Shows</p>
          </Link>
        </header>
      </div>
      <Switch>
        <ShowsProvider value={{ shows, setShows, id, GetId }}>
          <Route exact path="/" component={Cards}></Route>
          <Route
            exact
            path="/show/:id"
            value={{ shows, setShows, id }}
            component={SingleShow}
          ></Route>
        </ShowsProvider>
      </Switch>
      <footer>
        <div className="Copyright">Copyright V. G. 2021</div>
      </footer>
    </div>
  );
}

export default App;
