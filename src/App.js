import React from "react";
import { Switch, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
function App() {
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
