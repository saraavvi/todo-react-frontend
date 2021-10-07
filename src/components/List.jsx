import React, { useState } from 'react';
import ListModal from './ListModal';
import classes from './List.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function List({ list, handleDelete, handleUpdate }) {
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = (titleData, bodyData) => {
    if (showModal) {
      setShowModal(false);
      if (list.title !== titleData || list.body !== bodyData) {
        handleUpdate(list._id, titleData, bodyData);
      }
    } else {
      setShowModal(true);
    }
  };

  const handleDeleteClick = () => {
    handleDelete(list._id);
  };

  return (
    <>
      <div className={classes['list-card']}>
        <div onClick={handleModalClick}>
          <div>
            <h2>{list.title}</h2>
          </div>
          <div className={classes['body-container']}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {list.body}
            </ReactMarkdown>
          </div>
        </div>
        <div className={classes['button-container']}>
          <button
            onClick={handleDeleteClick}
            className={classes['delete-button']}
            type="button"
          >
            x
          </button>
        </div>
      </div>
      {showModal && (
        <ListModal
          handleModalClick={handleModalClick}
          list={list}
          handleUpdate={handleUpdate}
        />
      )}
    </>
  );
}
