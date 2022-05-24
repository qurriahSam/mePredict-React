import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MyNav from "./components/MyNav";

function App() {
  return (
    <>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
