import React from "react";
import Group from "../group";
import Panel from '../panel'

const chatPage = () => {
  return (
    <div className="chat-page">
      <div className="group-chat">
        <Group />
      </div>
      <div className="group-panel-box">
        <Panel />
      </div>
    </div>
  );
};

export default chatPage;
