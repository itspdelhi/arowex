import React, { Component } from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Merged from "./Components/Login/Login";
import Navbar2 from './Components/Navbar2/Navbar2';
import Login from "./Components/Login/Login";


const App3 = () => {
  return (
    <>
      <Login />
      <Navbar2 />
    </>
  );
};
export default App3;
