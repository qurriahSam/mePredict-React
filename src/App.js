import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MyNav from "./components/MyNav";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Game from "./components/Game";

function App() {
  return (
    <main className="min-h-screen bg-[#000C1D]">
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </main>
  );
}

export default App;
