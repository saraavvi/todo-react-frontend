import React, { useContext, useState } from "react";
import { ListContext } from "../contexts/ListContext";
import List from "../components/List";

export default function ListPage() {
  const { lists } = useContext(ListContext);
  const [input, setInput] = useState("");

  function handleOnChange(e) {
    setInput(e.target.value);
  }
  function handleOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="New list..."
          onChange={handleOnChange}
        />
      </form>
      {lists && (
        <>
          {lists.map((list) => {
            return <List key={list._id} list={list} />;
          })}
        </>
      )}
    </div>
  );
}
