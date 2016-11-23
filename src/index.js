import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Router, Route, Link, browserHistory } from 'react-router';



ReactDOM.render((
   <Router history={browserHistory}>
     <Route path="/" component={App} />
   </Router>
), document.querySelector('#root-container'));

