import React, { useContext } from "react";
import { ListContext } from "../contexts/ListContext";

export default function List({ list }) {
  const { toggleModal } = useContext(ListContext);
  return (
    <div>
      <h2 onClick={() => toggleModal()}>{list.title}</h2>
    </div>
  );
}
