import React, { useState, useEffect } from "react";
import classes from "./Modal.module.css";

const Modal = ({ list, handleModalClick }) => {
  const [titleData, setTitleData] = useState("");
  const [bodyData, setBodyData] = useState("");

  useEffect(() => {
    setTitleData(list.title);
    setBodyData(list.body);
  }, []);

  const handleTitleChange = (e) => {
    setTitleData(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBodyData(e.target.value);
  };

  return (
    <>
      <div onClick={handleModalClick} className={classes["backdrop"]}></div>
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
          <button onClick={handleModalClick} className="close">
            close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
