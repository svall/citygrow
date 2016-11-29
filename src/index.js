import React from 'react';
import ReactDOM from 'react-dom';
import routes from './components/routes.js';
import { Router, Route, Link, hashHistory } from 'react-router';


ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
document.querySelector('#root-container'));

// ReactDOM.render((
//    <Router history={hashHistory}>
//      <Route path="/home" component={App}>

//       <Route path="login" component={LoginForm} />
//       <Route path="welcome" component={Welcome} />
//       <Route path="signup" component={SignupForm} />
//      </Route>
//    </Router>
// ), document.querySelector('#root-container'));
