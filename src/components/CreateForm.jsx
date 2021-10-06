import React, { useState } from 'react';

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
      <form onSubmit={handleOnSubmit}>
        <input
          value={input}
          type="text"
          placeholder="New list..."
          onChange={handleOnChange}
        />
      </form>
    </>
  );
}
