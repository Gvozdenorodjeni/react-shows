import "./App.scss";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Cards from "./components/Cards/Cards";
import SingleShow from "./Pages/SingleShow/SingleShow";

export const showsContext = React.createContext({});
function App() {
  const { Provider: ShowsProvider } = showsContext;
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("http://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);
  return (
    <div className="App">
      <Switch>
        <ShowsProvider value={{ shows, setShows }}>
          <Route exact path="/" component={Cards}></Route>
          <Route
            exact
            path="/show/:id"
            value={{ shows, setShows }}
            component={SingleShow}
          ></Route>
        </ShowsProvider>
      </Switch>
    </div>
  );
}

export default App;
