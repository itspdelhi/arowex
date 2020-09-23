import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  return (
    <>
      <div class="footer sticky-footer">
        <div className="container">
          <div className="row stick-row" >
            <div className="col-2 bottom-nav-design">
              <NavLink className="btn nav-btn" to="/m2"><i class="fa fa-home" aria-hidden="true"></i></NavLink>
              <span>Home</span>
            </div>
            <div className="col-2 bottom-nav-design">
              <NavLink className="btn nav-btn" to=""><i class="fa fa-building-o" aria-hidden="true"></i> </NavLink>
              <span>Market</span>
            </div>
            <div className="col-2 bottom-nav-design">
              <NavLink className="btn nav-btn" to=""><i class="fa fa-globe" aria-hidden="true"></i>  </NavLink>
              <span>Trade</span>
            </div>
            <div className="col-2 bottom-nav-design">
              <NavLink className="btn nav-btn"  to="/voting"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></NavLink>
              <span>Voting</span>
            </div>
            <div className="col-2 bottom-nav-design">
              <NavLink className="btn nav-btn" to="/loginstick"><i class="fa fa-credit-card-alt" aria-hidden="true"></i></NavLink>
              <span>Login</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar2;
