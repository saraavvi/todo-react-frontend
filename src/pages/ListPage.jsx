import React, { useState, useContext, useEffect } from 'react';
import { ListContext } from '../contexts/ListContext';
import { UserContext } from '../contexts/UserContext';
import List from '../components/List';
import { Api } from '../api/Api';
import classes from './ListPage.module.css';
import CreateForm from '../components/CreateForm';

export default function ListPage() {
  const [apiError, setApiError] = useState();
  const [isLoading, setIsLoading] = useState();
  const { lists, getAllLists } = useContext(ListContext);
  const { user, fetchUserData } = useContext(UserContext);

  useEffect(() => {
    if (!lists) {
      setIsLoading(true);
      getAllLists();
      setIsLoading(false);
    }
  }, [lists, getAllLists]);

  useEffect(() => {
    if (!user) {
      fetchUserData();
    }
  }, [user, fetchUserData]);

  const handleCreate = async (input) => {
    setApiError(null);
    try {
      await Api.createList(input);
    } catch (err) {
      setApiError(err.response.data.message);
    }
    getAllLists();
  };

  const handleUpdate = async (id, title, body) => {
    setApiError(null);
    const token = localStorage.getItem('jwt');
    await Api.updateList(token, id, title, body);
    getAllLists();
  };

  const handleDelete = async (id) => {
    setApiError(null);
    const token = localStorage.getItem('jwt');
    await Api.deleteList(token, id);
    getAllLists();
  };

  return (
    <div>
      <CreateForm handleCreate={handleCreate} />
      {apiError && <p className={classes.listError}>{apiError}</p>}
      {isLoading && <p className={classes.listLoading}>Loading...</p>}
      <div className={classes['lists-container']}>
        {lists && (
          <>
            {lists.map((list) => {
              return (
                <List
                  key={list._id}
                  list={list}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
