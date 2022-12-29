const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io'); 

const PORT = process.env.PORT || 4000

app.use(cors()); // Add cors middleware

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);

    socket.on('join_room', (data) => {
        const { username, room } = data; // Data sent from client when join_room event emitted
        socket.join(room); // Join the user to a socket room
      });


      let __createdtime__ = Date.now(); // Current timestamp
      // Send message to all users currently in the room, apart from the user that just joined
      socket.to(room).emit('receive_message', {
        message: `${username} has joined the chat room`,
        username: CHAT_BOT,
        __createdtime__,
      });

    socket.on('disconnect', () => {
        console.log(`User disconnected ${socket.id}`);
    });

  });


app.get('/', function (req, res) {
    res.status(200).json({message: "Express root route working!!"});
});

server.listen(PORT, () => console.log('Server is running on port 4000'));