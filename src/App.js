import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
import { ListContext } from "./contexts/ListContext";
import Modal from "./components/Modal";

function App() {
  const [lists, setLists] = useState(null);
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

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
    <ListContext.Provider
      value={{ lists, setLists, modal, setModal, toggleModal }}
    >
      <div>
        <Modal show={modal} />
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
