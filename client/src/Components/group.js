import React, { useState } from "react";

const group = () => {
  const [search, setSearch] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(search.value);
    setSearch(search.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <form className="search-bar" onSubmit={handleSearchSubmit} id="search-container">
        <input
          type="text"
          className="search-bar__input"
          placeholder="Search"
          value={search}
        />
        <button
          className="search-btn"
          type="submut"
          onChange={handleSearchChange}
        >
          search
        </button>
      </form>

      <div className="all-groups">
        <h3>//Channels</h3>
        <div>Group names</div>
        <div>Group names</div>
        <div>Group names</div>
        <div>Group names</div>
      </div>

      <div className="group-messages">
        <h3>//Direct messages</h3>
        <div className="user-msg">
          <div className="conversation">
            <img src="http://placehold.it/" alt="" />
            <div className="title-text"></div>
            <div className="created-date">5 min ago</div>
            <div className="conversation-message"> Thank you</div>
          </div>
        </div>
      </div>

      <div className="new-message-container">
        <a href="#">+</a>
      </div>
    </div>
  );
};

export default group;
