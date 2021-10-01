import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ title, body }) => {
  return (
    <>
      <div className={classes["backdrop"]}></div>
      <div className={classes["modal-container"]}>
        <div className="modal">
          <header className="modal-header">
            <h2 className="modal-header-title">{title}</h2>
            <button className="close">x</button>
          </header>
          <main className="modal-content">{body}</main>
        </div>
      </div>
    </>
  );
};

export default Modal;
