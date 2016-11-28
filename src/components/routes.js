import React from 'react';
import App from './App.jsx';
import LoginForm from './Login/LoginForm.jsx';
import Welcome from './Welcome/Welcome.jsx';
import SignupForm from './Signup/SignupForm.jsx';
import GardenPage from './GardenPage/GardenPage.jsx';
import { Route, IndexRoute } from 'react-router';

module.exports = (
    <Route path="/" component={App} >

     <Route path="/login" component={LoginForm} />
     <Route path="/signup" component={SignupForm} />
     <Route path="/home" component={GardenPage} />
   </Route>
);
