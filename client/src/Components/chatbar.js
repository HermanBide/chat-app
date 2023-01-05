import React, { useState } from "react";
import Conversation from "./conversation";
import { FaSearchPlus } from 'react-icons/fa'

const chatbar = () => {
  const [search, setSearch] = useState("");

  const rooms = [ 'MERN-Stack', 'MEAN-Stack', 'MEVN-Stack', 'LAMP-Stack', 'Serverless-Stack', 'Flutter']

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(search.value);
    setSearch(search.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="side-chat-container">

      <form className="search-bar" onSubmit={handleSearchSubmit} id="search-container">
        <input
          type="text"
          className="search-bar-input"
          placeholder="Search"
          value={search}
        />
        <FaSearchPlus
          className="search-btn"
          type="submut"
          onChange={handleSearchChange}
        />
          {/* search
        </FaSearchPlus> */}
      </form>

      <div className="all-groups">
        <h3>//Channels</h3>
        {
          rooms.map((roomName, index) => (
            <div key={index}>
            {roomName}
            </div>
          ))}
            
      </div>

      <h3>//Direct messages</h3>
      <div id="conversation-list">
        <div className="user-msg">
        <Conversation />
        <Conversation />
          <div className="conversation">
            <img className="profile-img" src="https://iili.io/HTL6qUF.md.jpg" alt="" />
            <div className="title-text">ben smith</div>
          </div>
        </div>

      </div>

      <div className="new-message-container">
      <p>New Message</p>
        <a href="#">+</a>
      </div>
    </div>
  );
};

export default chatbar;
