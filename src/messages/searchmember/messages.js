import React, { useState } from "react";

// style
import './messages.css';

const Message = () => {

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const hendlerChange = (e) => {
    setMessage(e.target.value)
  }

  const sendMessage = () => {
    if (!message) return;
    setMessages([...messages, message]);
    setMessage('');
  }

  return (
    < div className="border">
      <div className="message-search">
        <h2>Messages</h2>
        <div>
          <label htmlFor="search-members">
            <i className="bi bi-search"></i>
            <input type="search" placeholder="Search memebers" />
          </label>
        </div>

        <div className="d-flex user-container">
          <div>
            <i className="bi bi-person-circle"></i>
          </div>
          <div>
            <h3>test3</h3>
            <p>Salom</p>
          </div>
        </div>
      </div>
      <div className="user-leftSide">
        <div className="">
          <div className="r">
            <i className="bi bi-person-circle"></i>
            <h3>test3</h3>
          </div>
          <ul className="message-list">
            {messages?.map((item, i) => {
              return (
                <li key={i}>{item}</li>
              )
            })

            }
          </ul>
          <div className="send-message">
            <input type="text" placeholder="Write message ... " value={message} onChange={hendlerChange} />
            <button onClick={sendMessage}><i className="bi bi-plus-circle-fill"></i></button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Message;