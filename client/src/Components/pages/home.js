import React, { 
  useEffect, 
  // useState 
} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
// import { Container, Text, Box, Tab, TabList, TabPanel, Tabs, TabPanels } from "@chakra-ui/react";

const home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      navigate("/chatPage");
    }
  }, [navigate]);

  return (
    <div className="row">
      home for you.. yay!
      <div className="col-md">
        <div className="ad-container">
          <h2>Chat, share and collaborate</h2>
          <p>Chat-application for sharing and collaborate</p>
          <Link to="/chatPage">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>

        <div
          className="home-img"
          style={{ height: "92vh", backgroundColor: "gray" }}
        >
          {/* <img src="/" alt="home" /> */}
        </div>
      </div>
    </div>
  );
};

export default home;
