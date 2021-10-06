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

  const fetchUserData = () => {
    const url = '/api/users/getMe';
    const token = localStorage.getItem('jwt');
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.user._id) {
          console.log(data.data.user);
          setUser(data.data.user);
        }
      })
      .catch((err) => console.error(err));
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
