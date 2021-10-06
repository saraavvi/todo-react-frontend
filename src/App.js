import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import LandingPage from './pages/LandingPage';
import { ListContext } from './contexts/ListContext';
import Header from './components/Header';
import { Api } from './api/Api';

function App() {
  const [lists, setLists] = useState(null);

  const getAllLists = async () => {
    const token = localStorage.getItem('jwt');
    const lists = await Api.getAllLists(token);
    if (!lists.data.data.lists) {
      return new Error('Unable to fetch lists');
    }
    setLists(lists.data.data.lists);
  };
  
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
