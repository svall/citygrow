import React, { Component } from 'react';
import GardenForm from './GardenForm/GardenForm.jsx';
import GardenList from './GardenList/GardenList.jsx';
import SignupForm from './Signup/SignupForm.jsx';
import LoginForm from './Login/LoginForm.jsx';
import Welcome from './Welcome/Welcome.jsx';
// import GardenListItem from './GardenListItem/GardenListItem.jsx';
import GardenDisplay from './GardenDisplay/GardenDisplay.jsx';
import style from './App.css';

class App extends Component {

  constructor(props) {
    super();
    // console.log(this);
    this.state = {
      gardens: [],
      selected: '',
      garden_id: '',
      name: '',
      zipcode: '',
      // user_id: '',
      // produce: 0,
      // user: 0,

      quad_id: 0,
      prod_quad: 0,
      user_quad: 0,

      quadrants: [],
      q1: false,
      signup: {
        username: '',
        password: ''
      },
      login: {
        loggedIn: false,
        username: '',
        password: '',
        id: ''
      }
    };
    // this.updateIdQuadrant = this.updateIdQuadrant.bind(this);
  }


  //________________USERS________________

  updateFormSignUpUsername(e) {
    console.log(e.target.value);
    this.setState({
      signup: {
        username: e.target.value,
        password: this.state.signup.password
      }
    });
  }

  updateFormSignUpPassword(e) {
    console.log(e.target.value);
    this.setState({
      signup: {
        username: this.state.signup.username,
        password: e.target.value
      }
    });
  }

  updateFormLogInUsername(e) {
    console.log(e.target.value);
    this.setState({
      login: {
        username: e.target.value,
        password: this.state.login.password
      }
    });
  }

  updateFormLogInPassword(e) {
    console.log(e.target.value);
    this.setState({
      login: {
        username: this.state.login.username,
        password: e.target.value
      }
    });
  }

  handleSignUp() {
    fetch('/db/gardens/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.signup.username,
        password: this.state.signup.password
      })
    })
    .then(r => r.json())
    .then((data) => console.log(data))
    .then(() => console.log('You have signed up!'))
    .catch(err => console.log(err));
  }

  handleLogIn() {
    console.log('test');
    fetch('/auth', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.login.username,
        password: this.state.login.password
      })
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
      login: {
        username: data.name,
        password: data.password,
        loggedIn: True,
        id: data.id
      }

    })})
    .then(console.log(this.state.login.id))
    .then(console.log('succesful login'))
    .catch(err => console.log(err));
  }

  onSuccessfulLogIn(a,b) {
    console.log(a,b);
  }


  render(){
    return (
      <div>

        {this.props.children && React.cloneElement(this.props.children, {
          state: 'test',
          signup: this.state.signup,
          login: this.state.login,
          updateFormLogPassword: (event) => this.updateFormLogInPassword(event),
          updateFormLogUsername: (event) => this.updateFormLogInUsername(event),
          updateFormSignUsername: (event) => this.updateFormSignUpUsername(event),
          updateFormSignPassword: (event) => this.updateFormSignUpPassword(event),
          handleSign:()=> this.handleSignUp(),
          handleLog:()=> this.handleLogIn()
        })}
      </div>
    );
  }
}

export default App;
