import React, { useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';

import ListPage from './pages/ListPage';
import LandingPage from './pages/LandingPage';
import { ListContext } from './contexts/ListContext';
import { UserContext } from './contexts/UserContext';
import Header from './components/Header';
import { Api } from './api/Api';

function App() {
  const [lists, setLists] = useState(null);
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    const response = await Api.getMe();
    if (!response.data.data.user._id) {
      return new Error('Unable to fetch lists');
    }
    setUser(response.data.data.user);
  };

  const getAllLists = useCallback(async () => {
    const token = localStorage.getItem('jwt');
    const lists = await Api.getAllLists(token);
    if (!lists.data.data.lists) {
      return new Error('Unable to fetch lists');
    }
    setLists(lists.data.data.lists);
  }, []);

  return (
    <UserContext.Provider value={{ user, fetchUserData, setUser }}>
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
    </UserContext.Provider>
  );
}

export default App;
