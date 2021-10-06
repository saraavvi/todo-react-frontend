import React, { useContext, useEffect } from 'react';
import { ListContext } from '../contexts/ListContext';
import { UserContext } from '../contexts/UserContext';
import List from '../components/List';
import { Api } from '../api/Api';
import classes from './ListPage.module.css';
import CreateForm from '../components/CreateForm';

export default function ListPage() {
  const { lists, getAllLists } = useContext(ListContext);
  const { user, fetchUserData } = useContext(UserContext);

  useEffect(() => {
    if (!lists) {
      getAllLists();
    }
  }, [lists, getAllLists]);

  useEffect(() => {
    if (!user) {
      fetchUserData();
    }
  }, [user, fetchUserData]);

  const handleCreate = async (input) => {
    const token = localStorage.getItem('jwt');
    await Api.createList(token, input);
    getAllLists();
  };

  const handleUpdate = async (id, title, body) => {
    const token = localStorage.getItem('jwt');
    await Api.updateList(token, id, title, body);
    getAllLists();
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('jwt');
    await Api.deleteList(token, id);
    getAllLists();
  };

  return (
    <div>
      <CreateForm handleCreate={handleCreate} />
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
