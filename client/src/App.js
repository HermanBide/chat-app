import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ChatPage from "./Components/pages/chatPage";
import Register from "./Components/pages/register";
import Login from "./Components/pages/login";
import Navbar from "./Components/navbar";
import Home from "./Components/pages/home";
import io from "socket.io-client";

const socket = io.connect("http://localhost:4000");

function App() {
  // const [user, setUser] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("joinRoom", { username, room });
      setShowChat(true);
    }
    // navigate("/chatPage", { replace: true });
    console.log(`${username} with this ID: ${socket.id} has joined ${room}`);
  };

  return (
    <div className="App">
      <Navbar />
      {/* <Router> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/register"
              element={
                <Register
                  setEmail={setEmail}
                  email={email}
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  isChatOpen={isChatOpen}
                  setIsChatOpen={setIsChatOpen}
                  room={room}
                  setRoom={setRoom}
                  message={message}
                  setMessage={setMessage}
                  socket={socket}
                  joinRoom={joinRoom}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/chatPage" element={<ChatPage />} />
          </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
