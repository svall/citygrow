import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import LoginForm from './components/Login/LoginForm.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import SignupForm from './components/Signup/SignupForm.jsx';
import { Router, Route, Link, hashHistory } from 'react-router';



ReactDOM.render((
   <Router history={hashHistory}>
     <Route path="/" component={App} />
     <Route path="login" component={LoginForm} />
     <Route path="welcome" component={Welcome} />
     <Route path="signup" component={SignupForm} />
   </Router>
), document.querySelector('#root-container'));

// ReactDOM.render((
//    <Router history={hashHistory}>
//      <Route path="/home" component={App}>

//       <Route path="login" component={LoginForm} />
//       <Route path="welcome" component={Welcome} />
//       <Route path="signup" component={SignupForm} />
//      </Route>
//    </Router>
// ), document.querySelector('#root-container'));
