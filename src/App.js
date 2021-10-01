import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
import { ListContext } from "./contexts/ListContext";
import Header from "./components/Header";
import { Api } from "./api/Api";

function App() {
  const [lists, setLists] = useState(null);

  useEffect(() => {
    Api.getAllLists().then((data) => setLists(data.data.data.lists));
  }, []);

  return (
    <ListContext.Provider value={{ lists, setLists }}>
      <div>
        <Header />
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <ListPage />
          </Route>
        </Switch>
      </div>
    </ListContext.Provider>
  );
}

export default App;
