import React, { useState } from "react";
import Form from "./form";

const panel = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

  return (
    <div>
      <div className="panel-box">
        <div className="text">
          <div className="conversation">
            <img  className="profile-img" src="https://iili.io/HTL6qUF.md.jpg" alt="avatar" />
            <div className="title-text"></div>
            <div className="created-date">5 min ago</div>
            <div className="conversation-message"> Thank you</div>
          </div>
        </div>
      </div>
      <div className="form-box">
        <Form input={input} setInput={setInput} chat={chat} setChat={setChat} />
      </div>
    </div>
  );
};

export default panel;
