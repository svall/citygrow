import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import LoginForm from './components/Login/LoginForm.jsx';
import { Router, Route, Link, browserHistory } from 'react-router';



ReactDOM.render((
   <Router history={browserHistory}>
     <Route path="/" component={App} />
     <Route path="/login" component={LoginForm} />
   </Router>
), document.querySelector('#root-container'));

