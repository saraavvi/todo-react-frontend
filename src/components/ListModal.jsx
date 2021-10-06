import React, { useState, useEffect } from 'react';
import classes from './ListModal.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ListModal = ({ list, handleModalClick }) => {
  const [titleData, setTitleData] = useState('');
  const [bodyData, setBodyData] = useState('');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setTitleData(list.title);
    setBodyData(list.body);
  }, [list.title, list.body]);

  const handleTitleChange = (e) => {
    setTitleData(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBodyData(e.target.value);
  };

  const closeModal = () => {
    handleModalClick(titleData, bodyData);
  };

  const toggleMode = () => {
    if (editMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  return (
    <>
      <div onClick={closeModal} className={classes['backdrop']}></div>
      <div className={classes['modal-container']}>
        {editMode ? (
          <>
            <header className="modal-header">
              <label for="title">Title:</label>
              <input
                id="title"
                value={titleData}
                onChange={handleTitleChange}
              />
            </header>
            <main className={classes['modal-content']}>
              <textarea
                className={classes['md-editor']}
                value={bodyData}
                onChange={handleBodyChange}
              />
            </main>
          </>
        ) : (
          <>
            <header className={classes['modal-header']}>
              <h2>{titleData}</h2>
            </header>
            <main className={classes['modal-content']}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {bodyData}
              </ReactMarkdown>
            </main>
          </>
        )}
        <div className={classes['modal-footer']}>
          <p>
            Last modified at: {new Date(list.lastModifiedAt).toLocaleString()}
          </p>
          <div className={classes['button-container']}>
            {editMode ? (
              <button onClick={toggleMode}>done</button>
            ) : (
              <button onClick={toggleMode}>edit</button>
            )}
            <button onClick={closeModal}>close</button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ListModal;
