import React, { Component } from 'react';
import "./SignUp.css";

export default class SignUp extends Component {
  render(){

    return(
      <div className="SignUp">
      <h4>SignUp</h4>
        <input
        type="text"
        placeholder="Enter Name"
        name="name"
        />
          <h4>Password</h4>
         <input
        type="text"
        placeholder="Enter password"
        name="name"
        />
      </div>
   )
}

}
