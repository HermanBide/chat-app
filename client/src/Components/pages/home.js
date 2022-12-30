import React from "react";
// import { useNavigate } from "react-router";
import io from 'socket.io-client'

const socket = io.connect("http://localhost:4000")

const home = ({ username, setUsername, room, setRoom }) => {
  // const navigate = useNavigate();

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("joinRoom", { username, room });
    }
    // navigate("/chatPage", { replace: true });
    console.log(`${username} with this ID: ${socket.id} has joined ${room}`);
  };
  return (
    <div className="home">
      <form className="signin-form">
        <input
          type="text"
          placeholder="username"
          name="username"
          className="signin-input"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <select
          className="options-list"
          id="options"
          onChange={(e) => setRoom(e.target.value)}
        >
          {/* <select className={styles.input}></select> */}
          <option>-- Select Room --</option>
          <option value="mern-stack">MERN-Stack</option>
          <option value="mean-stack">MEAN-Stack</option>
          <option value="mevn-stack">MEVN-Stack</option>
          <option value="lamp-stack">LAMP-Stack</option>
          <option value="serverless-stack">Serverless-Stack</option>
          <option value="flutter">Flutter</option>
        </select>
        <button className="signin-button" onClick={joinRoom}>
          Join A Room
        </button>
      </form>
    </div>
  );
};

export default home;
