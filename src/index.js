import React from "react";
import ReactDOM from "react-dom";
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";
import Chat from "./components/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
