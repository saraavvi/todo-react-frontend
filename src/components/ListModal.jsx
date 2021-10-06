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
        <div className="modal">
          <button onClick={toggleMode}>edit</button>
          {editMode ? (
            <>
              <header className="modal-header">
                <input value={titleData} onChange={handleTitleChange} />
              </header>
              <main className="modal-content">
                <textarea value={bodyData} onChange={handleBodyChange} />
              </main>
            </>
          ) : (
            <>
              <header className="modal-header">
                <h2>{titleData}</h2>
              </header>
              <main className="modal-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {bodyData}
                </ReactMarkdown>
              </main>
            </>
          )}
          <p>
            Last modified at: {new Date(list.lastModifiedAt).toLocaleString()}
          </p>
          <button onClick={closeModal} className="close">
            close
          </button>
        </div>
      </div>
    </>
  );
};

export default ListModal;
