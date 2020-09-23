import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg">
        <img className="navbar-img" src="/images/26.png" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/exchange" style={{width:'3rem'}} >Exchange <span className="sr-only">(current)</span></NavLink>
              
            </li>

            <li className="nav-item active">
              <a className="nav-link" style={{width:'2rem'}} href="#">Markets<span className="sr-only">(current)</span></a>
            </li>
            
            <li className="nav-item active">
              <a className="nav-link"style={{width:'2rem'}} href="#">Trading<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
            <NavLink className="nav-link" to="/voting" style={{width:'2rem'}}>Voting <span className="sr-only">(current)</span></NavLink>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="#" style={{width:'2rem'}}>Listing <span className="sr-only">(current)</span></a>
            </li>
            
            <li className="nav-item active">
              <a className="nav-link" href="#" style={{width:'1rem'}}>News <span className="sr-only">(current)</span></a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              
              

              <NavLink className="nav-link" to="/loginstick">
              <button type="button" class="btn btn-outline-info" style={{width:'5rem',color:'#001D57',backgroundColor:'#00CCFF',height:'2rem',padding:'initial'}}>Login</button>
              <button type="button" class="btn btn-outline-info" style={{width:'5rem',color:'#001D57',backgroundColor:'#00CCFF',height:'2rem',padding:'initial'}}>Sign up</button>
              </NavLink>
              

              
            </li>




          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;