const express = require("express");
const http = require("http");
const cors = require("cors");
const userRoutes = require("./routes/user");
require('./db')

const { Server } = require("socket.io");

const PORT = process.env.PORT || 4000;
const app = express();
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes)


const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const CHAT_BOTTOM = "ChatBot";

let chatRoom = "";
let allUsers = [];

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on("join_room", (data) => {
    const { username, room } = data; // Data sent from client when join_room event emitted
    socket.join(data);
    socket.join(room); // Join the user to a socket room
    console.log(`User with ID: ${socket.id} joined room: ${room}`);

    let __createdtime__ = Date.now(); // Current timestamp

    // Send message to all users currently in the room, apart from the user that just joined
    socket.to(room).emit("receive_message", {
      message: `${username} has joined the chat room`,
      username: CHAT_BOT,
      __createdtime__,
    });

    socket.emit("receive_message", {
      message: `Welcome ${username}`,
      username: CHAT_BOT,
      __createdtime__,
    });

    // socket.on('send_message', (data) {
    // socket.to(data.room).emit('receive_message', data);
    //   message: `Welcome ${username}`
    // });

    chatRoom = room;
    allUsers.push({ id: socket.id, username, room });
    chatRoomUsers = allUsers.filter((user) => user.room === room);
    socket.to(room).emit("chatroom_users", chatRoomUsers);
    socket.emit("chatroom_users", chatRoomUsers);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected ${socket.id}`);
  });
});

app.get("/", function (req, res) {
  res.status(200).json({ message: "Express root route working!!" });
});

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
