import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';
import Logregstick from './';
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
          pathname: '/login'
        }} />
      )
    } else {
      return (
        <Login/>
      );
    }
  }
}

export default App;