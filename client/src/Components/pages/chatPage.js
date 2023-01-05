import React, { 
  useState, 
  // useEffect 
} from "react";
import Chatbar from "../chatbar";
import Chatbody from "../chatbody";
import Chatfooter from "../chatfooter";

const chatPage = ({ room, setRoom }) => {
  const [input, setInput] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("")

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
    setCurrentMessage((list) => [...list.data]);
  //   })
  // }, [socket]);



  return (
    <div className="chat-page">
      <div className="group-chat">
        <Chatbar />
      </div>
      <div className="msg-box">
        <Chatbody />
      </div>
      <div className="chat-footer">
        <Chatfooter input={input} setInput={setInput} />
      </div>
    </div>
  );
};

export default chatPage;
