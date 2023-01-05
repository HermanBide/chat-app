import React,
{ useState }
 from "react";
import "./App.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes
// }
//   from 'react-router-dom';
// import Home from "./Components/pages/home";
// import ChatPage from "./Components/pages/chatPage";
import Register from "./Components/pages/register";
// import Login from "./Components/pages/login";
// import navbar from "./Components/pages/navbar";
// import Home from "./Components/pages/home";
import io from "socket.io-client";


const socket = io.connect("http://localhost:4000");



function App() {
  // const [user, setUser] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("")
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
    {/* <Home /> */}
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
        //function
        joinRoom={joinRoom}

      />
    {/* <Router>
      <Switch>
      <Routes>
        <Route path="/" exact component={<ChatPage socket={socket}/>} />
      </Routes>
      <Routes>
        <Route path="/register" exact component={<Register/>} />
      </Routes>
      <Routes>
        <Route path="/login" exact component={<Login/>} />
      </Routes>
        </Switch>
    </Router> */}
    </div>
  );
}

export default App;
