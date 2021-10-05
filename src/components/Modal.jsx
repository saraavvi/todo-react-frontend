import React from 'react';
import classes from './ListModal.module.css';

const Modal = (props) => {
  const closeModal = () => {
    props.handleModalClick();
  };

  return (
    <>
      <div onClick={closeModal} className={classes['backdrop']}></div>
      <div className={classes['modal-container']}>
        <div className='modal'>{props.children}</div>
      </div>
    </>
  );
};

export default Modal;
