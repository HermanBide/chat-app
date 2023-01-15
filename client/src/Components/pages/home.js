import React from "react";
import { Link } from "react-router-dom";
// import { Container, Text, Box, Tab, TabList, TabPanel, Tabs, TabPanels } from "@chakra-ui/react";
const home = () => {
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
          <img src=" " alt="home" />
        </div>
      </div>
      {/* <Container maxW="xl" centerContent>
        <Box d="flex" justifyContent="center" w="100%" m="40px 0 15px 0" bo>
          <Text color="black">Chat App</Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs variant="soft-rounded">
            <TabList mb='1em'>
              <Tab width='50%'>login</Tab>
              <Tab width='50%'>signup</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
              <Login /> 

              </TabPanel>
              <TabPanel>
              <Register />

              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container> */}
    </div>
  );
};

export default home;
