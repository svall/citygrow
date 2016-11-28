import React, { Component } from 'react';
import style from './SignupForm.css';

// create a React Component called _App_
class SignupForm extends Component {



  render(){
    return (
      <div className="intro-pages">
      <h1 className="intro-title">Sign Up</h1>
      <div id='link-container'>
        <input
          type="text"
          placeholder="email"
          value={this.props.signUpUsername}
          onChange={this.props.updateFormUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={this.props.signUpPassword}
          onChange={this.props.updateFormPassword}
        />
        <button onClick={this.props.handleFormSubmit}>
          SignUp!
        </button>

      </div>
      </div>
    );
  }
}

export default SignupForm;
