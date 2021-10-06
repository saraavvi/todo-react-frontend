import React, { useContext, useState, useEffect } from 'react';
import { ListContext } from '../contexts/ListContext';
import List from '../components/List';
import { Api } from '../api/Api';
import classes from './ListPage.module.css';

export default function ListPage() {
  const { lists, getAllLists } = useContext(ListContext);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (!lists) {
      getAllLists();
    }
  }, [getAllLists, lists]);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      handleCreate(input);
      setInput('');
    }
  };

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
      <form onSubmit={handleOnSubmit}>
        <input
          value={input}
          type="text"
          placeholder="New list..."
          onChange={handleOnChange}
        />
      </form>
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
