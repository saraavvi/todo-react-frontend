import React, { useState, useEffect } from "react";
import classes from "./ListModal.module.css";

const ListModal = ({ list, handleModalClick }) => {
  const [titleData, setTitleData] = useState("");
  const [bodyData, setBodyData] = useState("");

  useEffect(() => {
    setTitleData(list.title);
    setBodyData(list.body);
  }, [list.title, list.body]);

  const handleTitleChange = (e) => {
    setTitleData(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBodyData(e.target.value);
  };

  const closeModal = () => {
    handleModalClick(titleData, bodyData);
  };

  return (
    <>
      <div onClick={closeModal} className={classes["backdrop"]}></div>
      <div className={classes["modal-container"]}>
        <div className="modal">
          <header className="modal-header">
            <input value={titleData} onChange={handleTitleChange} />
          </header>
          <main className="modal-content">
            <textarea value={bodyData} onChange={handleBodyChange} />
          </main>
          <p>
            Last modified at: {new Date(list.lastModifiedAt).toLocaleString()}
          </p>
          <button onClick={closeModal} className="close">
            close
          </button>
        </div>
      </div>
    </>
  );
};

export default ListModal;
