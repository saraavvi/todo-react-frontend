import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import { UserContext } from '../../contexts/UserContext';
import { ListContext } from '../../contexts/ListContext';

// Setup mock
const user = null;
const setUser = jest.fn();
const fetchUserData = jest.fn();
const lists = null;
const getAllLists = jest.fn();
const setLists = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <UserContext.Provider value={{ user, fetchUserData, setUser }}>
      <ListContext.Provider value={{ lists, getAllLists, setLists }}>
        <Layout />
      </ListContext.Provider>
    </UserContext.Provider>,
    div
  );
});
