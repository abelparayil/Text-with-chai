import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>
);
