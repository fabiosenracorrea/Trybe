import React, { useState, useEffect, useCallback } from "react";
import socketIOClient from "socket.io-client";

import './styles.css';

const ENDPOINT = "http://localhost:3333";
const socket = socketIOClient(ENDPOINT);


function Chat() {
  const [response, setResponse] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on("messageServer", data => {
      setResponse(data.message);
    });

    return () => socket.disconnect();
  }, []);

  const handleSubmit = useCallback((formEvent) => {
    formEvent.preventDefault();

    socket.emit('message', message);
  }, [message]);

  return (
    <div className="chatContainer" >
      <aside>
        <div>
          <span>Here are the users currently online:</span>
        </div>
      </aside>

      <main>
        <div>CHAT {response && response}</div>

        <form onSubmit={handleSubmit} className="chatInput">
          <input value={message} onChange={({ target }) => setMessage(target.value)} type="text"/>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  )
}

export default Chat;
