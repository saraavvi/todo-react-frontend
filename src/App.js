import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import LandingPage from "./pages/LandingPage";
import { ListContext } from "./contexts/ListContext";
import Header from "./components/Header";
import { Api } from "./api/Api";

function App() {
  const [lists, setLists] = useState(null);

  function getAllLists() {
    Api.getAllLists().then((data) => setLists(data.data.data.lists));
  }
  return (
    <ListContext.Provider value={{ lists, getAllLists }}>
      <div>
        <Header />
        <Switch>
          <Route path="/lists">
            <ListPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </ListContext.Provider>
  );
}

export default App;
