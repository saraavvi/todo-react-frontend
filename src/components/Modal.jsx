import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ title, body, lastModifiedAt, handleModalClick }) => {
  return (
    <>
      <div onClick={handleModalClick} className={classes["backdrop"]}></div>
      <div className={classes["modal-container"]}>
        <div className="modal">
          <header className="modal-header">
            <h2 className="modal-header-title">{title}</h2>
            <p>Last modified at: {new Date(lastModifiedAt).toLocaleString()}</p>
            <button onClick={handleModalClick} className="close">
              x
            </button>
          </header>
          <main className="modal-content">{body}</main>
        </div>
      </div>
    </>
  );
};

export default Modal;
