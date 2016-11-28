import React, { Component } from 'react';
import style from './LoginForm.css';

// create a React Component called _App_
class LoginForm extends Component {


  render(){
    return (
      <div className="intro-pages">
      <h1 className="intro-title">Log in</h1>
      <div id='link-container'>
        <input
          type="text"
          placeholder="email"
          value={this.props.login.username}
          onChange={this.props.updateFormLogUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={this.props.login.password}
          onChange={this.props.updateFormLogPassword}
        />
        <button onClick={this.props.handleLog}>
          Log In!
        </button>
      </div>
      </div>
    );
  }
}

export default LoginForm;
