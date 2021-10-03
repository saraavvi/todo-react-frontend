import React, { useContext, useState } from "react";
import { ListContext } from "../contexts/ListContext";
import List from "../components/List";
import { Api } from "../api/Api";
import classes from "./ListPage.module.css";

export default function ListPage() {
  const { lists, getAllLists } = useContext(ListContext);
  const [input, setInput] = useState("");

  function handleOnChange(e) {
    setInput(e.target.value);
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    if (input.length > 0) {
      handleCreate(input);
      setInput("");
    }
  }
  async function handleDelete(id) {
    await Api.deleteList(id);
    getAllLists();
  }

  async function handleCreate(input) {
    await Api.createList(input);
    getAllLists();
  }

  async function handleUpdate(id, title, body) {
    await Api.updateList(id, title, body);
    getAllLists();
  }

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
      <div className={classes["lists-container"]}>
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
