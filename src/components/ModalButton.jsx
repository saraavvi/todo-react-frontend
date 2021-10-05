import React, { useState } from 'react';
import Modal from './Modal';

export default function ModalButton(props) {
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <button onClick={handleModalClick}>{props.buttonText}</button>
      {showModal && (
        <Modal handleModalClick={handleModalClick}>
          {props.children}
        </Modal>
      )}
    </>
  );
}
