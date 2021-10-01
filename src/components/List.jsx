import React, { useState } from "react";
import Modal from "../components/Modal";
import classes from "./List.module.css";

export default function List({ list }) {
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  return (
    <div className={classes["list-card"]}>
      <div onClick={handleOnClick}>
        <h2>{list.title}</h2>
      </div>
      {showModal && (
        <Modal
          handleOnClick={handleOnClick}
          title={list.title}
          body={list.body}
          lastModifiedAt={list.lastModifiedAt}
        />
      )}
    </div>
  );
}
