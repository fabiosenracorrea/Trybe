import React, { useState } from 'react';
import './App.css';

function App() {
  const [appointments, setAppointments] = useState(['school', 'soccer', 'coding']);
  const [inputValue, setInputValue] = useState('');

  function addItemToList(text) {
    setAppointments([...appointments, text])
  }

  return (
    <>
      <h1>Hello, React!</h1>
      <div className="add">
        <input
          placeholder="Add more..."
          onChange={e => setInputValue(e.target.value)}
        />
        <button onClick={() => addItemToList(inputValue)}>
          Add!
        </button>
      </div>
      <div className="list-container">
        <p>Here's a list rendered with JSX:</p>
        <ul>
          {appointments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
