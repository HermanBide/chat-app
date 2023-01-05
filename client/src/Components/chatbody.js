import React from "react";
import Message from "./message";

const chatbody = () => {
  return (
    <div className="message-containder">
      <header className="chat__mainHeader">
        <p>MERN-Stack room</p>

        <button
          className="leaveChat__btn"
          // onClick={handleLeaveChat}
        >
          LEAVE CHAT
        </button>
      </header>
      <div className="recievers-name">Recievers name</div>
      <hr />
      {/*This shows messages sent from you*/}

      <div className="message__container">
        <div className="message__chats">
          <p className="sender__name">You</p>

          <div className="message__sender">
            <p>Hello there</p>
          </div>
        </div>

        {/*This shows messages received by you*/}

        <div className="message__chats">
          <p>Other</p>

          <div className="message__recipient">
            <p>Hey, I'm good, you?</p>
          </div>
        </div>

        {/*This is triggered when a user is typing*/}

        <div className="message__status">
          <p>Someone is typing...</p>
        </div>
      </div>

      
      <div className="chat-message-list">
        <div className="message-row other-message">
          <div className="message-content">
            <img
              className="profile-img"
              src="https://iili.io/HTL6qUF.md.jpg"
              alt="avatar"
            />
            <div className="message-text">
              {" "}
              I am hard working and will do all that i can do make sure i get a
              job in 2023, Thank you
            </div>
            <div className="message-time">5 min ago</div>
          </div>
        </div>

        <hr />
        <Message />
        <hr />

        <div className="message-row you-message">
          <div className="message-content">
            <div className="message-text">
              {" "}
              Thats good to hear, i hope you learn new skills and God is on your
              side
            </div>
            <div className="message-time">5 min ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default chatbody;
