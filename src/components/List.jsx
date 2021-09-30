import React, { useState } from "react";
import Modal from "../components/Modal";

export default function List({ list }) {
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  return (
    <div onClick={handleOnClick}>
      <h2>{list.title}</h2>
      {showModal && <Modal title={list.title} body={list.body} />}
    </div>
  );
}
