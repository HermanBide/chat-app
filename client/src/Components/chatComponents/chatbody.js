import React, {
  useState
} from "react";
import {
  BsChat,
  BsThreeDotsVertical,
  BsEmojiSmile,
} from "react-icons/bs";
import {MdOutlineAttachFile, MdSend } from "react-icons/md";
import './chatbody.css'
import Chatfooter from "./chatfooter";

const chatbody = () => {
  const [input, setInput] = useState("");
  return (
    <div className="rightSide">
          <div className="header">
            <div className="imgText">
              <div className="userimg">
                <img
                  src="https://iili.io/HTL6qUF.md.jpg"
                  className="cover"
                  alt="userpic"
                />
              </div>
              <h4>
                username
                <b />
                <span>online</span>
              </h4>
            </div>
            <ul className="nav_icons">
              <li className="">
                <BsChat />
              </li>
              <li className="">
                <BsThreeDotsVertical />
              </li>
            </ul>

            <div className="sub-menu-wrap" id="subMenu">
              <div className="sub-menu">
                <div className="user-info">
                  <h3>Account</h3>
                </div>
                <hr/>
                <a href="/home" className="sub-menu-link">
                  <p>Profile</p>
                </a>
                <a href="/home" className="sub-menu-link">
                  <p>Account</p>
                </a>
                <a href="/home" className="sub-menu-link">
                  <p>Sign out</p>
                </a>
              </div>
            </div>

          </div>

          {/*CHATBOX */}
          <div className="chatBox">
            <div className="message my_message">
              <p>
                hi <span>12:15pm</span>
              </p>
            </div>
            <div className="message frnd_message">
              <p>
                whats up sir <span>12:17pm</span>
              </p>
            </div>
            <div className="message my_message">
              <p>
                Nothing much hows work been ? <span>12:15pm</span>
              </p>
            </div>
            <div className="message frnd_message">
              <p>
                Tiring, i study alot theses days <span>12:17pm</span>
              </p>
            </div>
          </div>

          {/*InputBOX */}
          {/* <user ? Chatfooter input={input} setInput={setInput}/> */}
          <Chatfooter input={input} setInput={setInput}/>
        </div>
  );
};

export default chatbody;
