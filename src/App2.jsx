import React, { Component } from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Merged from "./Merged";
import Navbar2 from './Components/Navbar2/Navbar2';


const App2 = () => {
  return (
    <>
      <Merged />
      <Navbar2 />
    </>
  );
};
export default App2;
