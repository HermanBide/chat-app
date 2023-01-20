import React, { useState } from "react";
import { FaSearchPlus } from "react-icons/fa";

const sideDrawer = () => {
  const [search, setSearch] = useState("");
  // const [searchResult, setSearchResult] = useState([]);
  // const [loading, setLoading] = useState(false)
  // const [loadingChat, setLoadingChat] = useState()

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
      <form
        className="search-bar"
        onSubmit={handleSearchSubmit}
        id="search-container"
      >
      <label>Search Users to chat</label>
        <input
          type="text"
          className="search-bar-input"
          placeholder="Search"
          value={search}
        />
        <button className="search-btn" type="submut"  onChange={handleSearchChange}>
        <FaSearchPlus/>
        </button>
      </form>
    </div>
  );
};

export default sideDrawer;
