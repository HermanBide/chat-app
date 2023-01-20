import React, {
  // useEffect,
  // useState
} from "react";
import {
  BsChat,
  BsThreeDotsVertical,
  BsSearch,
} from "react-icons/bs";
import { MdGroupAdd} from "react-icons/md";
import  IconButton  from "@mui/material/IconButton";
// import SideDrawer from "./sideDrawer";
import './chatbar.css'

const chatbar = () => {
  // const [chats, setChats] = useState([])

  // const fetchChat = async () => {
  //   const {data}  = await axios.get('/')
  // setChats(data)
  // }

  // useEffect(() => {
  //   fetchChat();
  // },[])

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(search.value);
  //   setSearch(search.value);
  // };

  return (
    <div className="leftSide">
      <div className="header">
            <div className="userimg">
              <img
                src="https://iili.io/HTL6qUF.md.jpg"
                className="cover"
                alt="userpic"
              />
            </div>
            <ul className="nav_icons">
              <li className="">
                <IconButton variant="contained" size="medium">
                  <MdGroupAdd />
                </IconButton>
              </li>
              <li >
                <BsChat />
              </li>
              <li>
                <BsThreeDotsVertical 
                />
              </li>
            </ul>
          </div>
          {/*Search bar*/}
          <div className="search_chat">
            <div>
              <input type="text" placeholder="Search or start a new chat" />
              <BsSearch className="search_icon" />
            </div>
          </div>
          {/*Chat list*/}
          <div className="chatlist">
            <div className="block active">
              <div className="imgbox">
                <img
                  src="https://iili.io/HTL6qUF.md.jpg"
                  alt="pic"
                  className="cover"
                />
              </div>
              <div className="details">
                <div className="listHead">
                  <h4>username</h4>
                  <p className="time">10:45pm</p>
                </div>
                <div className="message_p">
                  <p>I hope you are able to finish asap</p>
                  <b>1</b>
                </div>
              </div>
            </div>
            <div className="block unread">
              <div className="imgbox">
                <img
                  src="https://iili.io/HaZfhEF.jpg"
                  alt="pic"
                  className="cover"
                />
              </div>
              <div className="details">
                <div className="listHead">
                  <h4>username</h4>
                  <p className="time">10:00pm</p>
                </div>
                <div className="message_p">
                  <p>Hey herman its been a while</p>
                  <b>1</b>
                </div>
              </div>
            </div>
          </div>
    </div>

  );
};

export default chatbar;
