import React from "react";
import {
  BsEmojiSmile,
} from "react-icons/bs";
import { MdOutlineAttachFile, MdSend } from "react-icons/md";
import { IconButton } from "@mui/material";
import "./chatfooter.css";

const chatfooter = ({ input, setInput, room, socket, username }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ userName: localStorage.getItem('userName'), message });
    if (input.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        username: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketId: socket.id,
      });
    }
    setInput(input.value);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // const sendMessage = async () => {
  //   if (input !== "") {
  //     const messageData = {
  //       room: room,
  //       sender: username,
  //       message: input,
  //       timestamp:
  //         new Date(Date.now()).getHours() +
  //         ":" +
  //         new Date(Date.now()).getMinutes,
  //     };
  //     await socket.emit("send_message", messageData);
  //     console.log("Sent message");
  //   }
  // };

  return (
      <div className="chatbox_input">
        <BsEmojiSmile className="input_icon" />
        <MdOutlineAttachFile className="input_icon" />
        <input
          type="text"
          placeholder="type a message"
          className="form-control"
          id="name"
          name="name"
          required
          value={input}
          onChange={handleChange}
        />
        <MdSend className="input_icon" />
      </div>
  );
};

export default chatfooter;
