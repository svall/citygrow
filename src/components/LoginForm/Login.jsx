import React, { Component } from 'react';

import "/.Login.css";

export default class Login extends Component {
  render(){

    return(

      <div className="Login">
      <h2>Login</h2>
        <input
        type="text"
        placeholder="Enter Name"
        name="name"
        />
          <h2>Password</h2>
         <input
        type="text"
        placeholder="Enter password"
        name="name"
        />
      </div>
   )
}

}
