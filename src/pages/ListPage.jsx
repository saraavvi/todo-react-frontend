import React, { useContext } from "react";
import { ListContext } from "../contexts/ListContext";
import List from "../components/List";

export default function ListPage() {
  const { lists } = useContext(ListContext);
  return (
    <div>
      <h1>List Page</h1>
      {lists && (
        <>
          {lists.map((list) => {
            return <List key={list.id} list={list} />;
          })}
        </>
      )}
    </div>
  );
}
