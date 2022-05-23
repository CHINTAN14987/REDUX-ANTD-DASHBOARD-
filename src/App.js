import React from "react";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};

export default App;
