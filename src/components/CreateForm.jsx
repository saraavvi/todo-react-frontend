import React, { useState } from 'react';
import classes from './CreateForm.module.css';

export default function CreateForm({ handleCreate }) {
  const [input, setInput] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      handleCreate(input);
      setInput('');
    }
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <form className={classes['create-form']} onSubmit={handleOnSubmit}>
        <input
          className={classes['create-form-title']}
          value={input}
          type="text"
          placeholder="New list..."
          onChange={handleOnChange}
        />
      </form>
    </>
  );
}
