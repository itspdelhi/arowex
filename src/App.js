import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Merged from "./Merged";
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { screenWidth: window.innerWidth };
    console.log('width :::::', window.innerWidth);
  }

  render() {

    if (this.state.screenWidth < 772) {
      return (
        <Redirect to={{
          pathname: '/m2'
        }} />
      )
    } else {
      return (
        <Merged />
      );
    }
  }
}

export default App;