import React, { Component } from 'react';
import style from './SignupForm.css';

// create a React Component called _App_
class SignupForm extends Component {



  render(){
    return (
      <div id='Form-container'>
              <div className='title'>
                  <h4>SIGN UP</h4>
              </div>
          <div className='Box'>

           <div className="signup-inputContainer">
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

   <a href='/#/login'><button onClick={event => this.handleFormSubmit(event)}>SignUp!</button></a>

        </div>
      </div>
      </div>
    );
  }
}

export default SignupForm;
