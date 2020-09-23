import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";



import { Switch, Route, Redirect } from "react-router-dom";
import Exchange from './Components/Exchange/Exchange';
import MarketHome from './Components/MarketHome/MarketHome';
import Login from './Components/Login/Login';
import Voting from "./Components/voting/voting";
import Logregstick from './Logregstick';



ReactDOM.render(
  <React.StrictMode>
   <Router>
     <Switch>
       <Route exact path = "/" component = {App} />
       <Route path="/m2" component={App2}/>
       <Route path="/market" component={App2}/>
        <Route path="/trade" component={App2}/>
        <Route path="/contract" component={App2}/>
        <Route path="/balance" component={App2}/>
        <Route path="/login" component={App3}/>
        <Route path="/loginstick" component={Logregstick}/>
        <Route path="/exchange" component={Exchange}/>
        <Route path="/markethome" component={MarketHome}/>
        <Route path="/voting" component={Voting}/>
        
        
       {/* <Route exact path = "/" component = {App} />
       <Route exact path = "/" component = {App} /> */}
     </Switch>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// var waypoint

// $('button.find-create').on('click', function() {
//   waypoint = new Waypoint({
//     element: document.getElementById('find-by-example'),
//     handler: function(direction) {
//       notify('Waypoint hit')
//     },
//     context: document.getElementById('overflow-scroll')
//   })
// })

// $('button.find-destroy').on('click', function() {
//   waypoint.destroy()
// })

// $('button.find-by-element').on('click', function() {
//   var element = document.getElementById('overflow-scroll')
//   var context = Waypoint.Context.findByElement(element)
//   if (typeof context === 'undefined') {
//     notify('Context does not exist')
//   }
//   else if (context instanceof Waypoint.Context) {
//     notify('Context found')
//   }
// })
