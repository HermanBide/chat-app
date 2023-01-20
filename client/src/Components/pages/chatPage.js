import React, {
  useState,
  // useEffect
} from "react";
import Chatbar from "../chatComponents/chatbar";
import Chatbody from "../chatComponents/chatbody";
import Chatfooter from "../chatComponents/chatfooter";
import { ChatState } from "../../Context/ChatProvider";
import "./chatPage.css";

const chatPage = () => {
  // const { user } = ChatState()
  // const [messageList, setMessageList] = useState([]);
  // const [currentMessage, setCurrentMessage] = useState("")

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  // setCurrentMessage((list) => [...list.data]);
  //   })
  // }, [socket]);

  return (
    <div className="body">
      {/* {user && } */}
      <div className="container">
        {/* { user &&  <Chatbar />} */}
        <Chatbar />
        {/* { user && <Chatbody /> } */}
        <Chatbody />
      </div>
    </div>
  );
};

export default chatPage;
