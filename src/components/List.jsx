import React, { useState, useContext } from "react";
import Modal from "../components/Modal";
import classes from "./List.module.css";
import { Api } from "../api/Api";
import { ListContext } from "../contexts/ListContext";

export default function List({ list }) {
  const { getAllLists } = useContext(ListContext);
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  const handleDeleteClick = () => {
    Api.deleteList(list._id).then((data) => console.log(data));
    getAllLists();
  };

  return (
    <div className={classes["list-card"]}>
      <div onClick={handleModalClick}>
        <h2>{list.title}</h2>
      </div>
      <button
        onClick={handleDeleteClick}
        className={classes["delete-button"]}
        type="button"
      >
        x
      </button>
      {showModal && (
        <Modal
          handleModalClick={handleModalClick}
          title={list.title}
          body={list.body}
          lastModifiedAt={list.lastModifiedAt}
        />
      )}
    </div>
  );
}
