import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
function App() {
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
      .then((data) => console.log(data));
  }
  return (
    <div>
      <h1>Todo App!</h1>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <ListPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
