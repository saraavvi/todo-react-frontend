import React from "react";

const Modal = ({ title, body }) => {
  return (
    <>
      <div className="modalContainer">
        <div className="modal">
          <header className="modal_header">
            <h2 className="modal_header-title">{title}</h2>
            <button className="close">x</button>
          </header>
          <main className="modal_content">{body}</main>
        </div>
      </div>
    </>
  );
};

export default Modal;
