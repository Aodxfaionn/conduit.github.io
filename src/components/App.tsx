import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "../styles.scss";
import Header from "./header/Header";
import Block from "./main/MainBlock/Block";
import SignIn from "./main/SignIn";
import SignUp from "./main/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Block />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
