import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
import { ListContext } from "./contexts/ListContext";

function App() {
  const [lists, setLists] = useState(null);

  useEffect(() => {
    getAllLists();
  }, []);

  function getAllLists() {
    const url = "/api/lists";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLists(data.data.lists);
      });
  }
  return (
    <ListContext.Provider value={{ lists, setLists }}>
      <div>
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
