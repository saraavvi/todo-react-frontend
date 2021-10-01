import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ title, body, lastModifiedAt, handleOnClick }) => {
  return (
    <>
      <div className={classes["backdrop"]}></div>
      <div className={classes["modal-container"]}>
        <div className="modal">
          <header className="modal-header">
            <h2 className="modal-header-title">{title}</h2>
            <p>Last modified at: {new Date(lastModifiedAt).toLocaleString()}</p>
            <button onClick={handleOnClick} className="close">
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
