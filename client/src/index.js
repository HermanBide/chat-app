import React from "react";
// import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ChatProvider from "./Context/ChatProvider";



const root = ReactDOMClient.createRoot(document.getElementById("root"));


root.render(
  <ChatProvider> 
        <BrowserRouter>
          <App />
        </BrowserRouter>
  </ChatProvider>
);
