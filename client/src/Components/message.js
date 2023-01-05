import React from "react";

const message = () => {
  return (
    <div>
      <div className="message-row other-message">
        <div className="message-content">
          <img
            className="profile-img"
            src="https://iili.io/HTL6qUF.md.jpg"
            alt="avatar"
          />
          <div className="message-text">
            {" "}
            {/* {messageList.map((messageChat) => {
              return <div className="message>
              
              <h3>{messageChat.message}</h3>
              <p>{messageChat.time}</p>
              </div>;
            })} */}
            I am hard working and will do all that i can do make sure i get a
            job in 2023, Thank you
          </div>
          <div className="message-time">5 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default message;
