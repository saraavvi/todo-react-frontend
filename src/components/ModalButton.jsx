import React from 'react';
import Modal from './Modal';

export default function ModalButton({
  buttonText,
  showModal,
  setShowModal,
  children,
}) {
  const handleModalClick = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <button className="btn" onClick={handleModalClick}>{buttonText}</button>
      {showModal && (
        <Modal handleModalClick={handleModalClick}>{children}</Modal>
      )}
    </>
  );
}
