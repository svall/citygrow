import React, { Component } from 'react';
import style from './LoginForm.css';

// create a React Component called _App_
class LoginForm extends Component {


  render(){
    return (
      <div id='Form-container'>
           <div className='title'>
              <h4>Login In</h4>
          </div>

         <div className='Box'>
           <div className="login-inputContainer">
            <input
              type="text"
              placeholder="email"
              value={this.props.logInUsername}
              onChange={this.props.updateFormUsername}
            />
            <input
              type="password"
              placeholder="password"
              value={this.props.logInPassword}
              onChange={this.props.updateFormPassword}
            />
            <button onClick={this.props.handleFormSubmit}>Log In!</button>
        </div>
      </div>
    </div>
    );
  }
}

export default LoginForm;
