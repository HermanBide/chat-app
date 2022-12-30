import React
// { useState }
 from "react";
import "./App.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// }
//   from 'react-router-dom';
// import Home from "./Components/pages/home";
import ChatPage from "./Components/pages/chatPage";

function App() {
  // const [username, setUsername] = useState("");
  // const [room, setRoom] = useState("");

  return (
    // <Router>
    <div className="App">
      {/* <Home
        username={username}
        setUsername={setUsername}
        room={room}
        setRoom={setRoom}
      /> */}

      <ChatPage />

      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<chatPage />} />
        <Routes/> */}
    </div>
    // </Router>
  );
}

export default App;
