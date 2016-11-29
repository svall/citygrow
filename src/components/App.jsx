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

        // selectIndex:0,
        // carasoul:[
        //   {
        //     url:'https://s-media-cache-ak0.pinimg.com/originals/fb/fc/f2/fbfcf203ebcf935868874053d2b039e9.jpg'
        //   },
        //   {
        //     url:'https://s-media-cache-ak0.pinimg.com/originals/69/0d/4b/690d4b6dec8a56acc8f20938534fcc37.jpg'
        //   },
        //   {
        //     url:'https://desertification.files.wordpress.com/2015/03/new-york-riverpark-urban-farm2.jpg?w=825&h=366&crop=1'
        //   },
        //   {
        //     url:'http://cdn.c.photoshelter.com/img-get2/I0000Lp2j72KRjwA/fit=1000x750/Roof-garden-LB1008-8803.jpg'
        //   },
        // ],

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
        password: ''
      }
    };
    // this.updateIdQuadrant = this.updateIdQuadrant.bind(this);
  }


  //______________Welcome Functions___________

// componentWillMount(){
//   this.onReaload()
//   this.changingBall()
// }
// componentWillUnMount(){
//  clearInterval(this.state.intervalRef)
// }
// changingBall(){
// const ref = setInterval(()=> {
//    this.onReaload()
// },700);
//  this.setState({
//    intervalRef: ref
//  });

// }
// onReaload(){
//  this.setState({
//    selectIndex:Math.floor(Math.carasoul() * this.state.carasoul.length)

//  });
// }



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
    .then(console.log(this.state.login.username))
    .then(this.setState({
      login: {
        username: '',
        password: ''
      }
    }))
    .then(this.onSuccessfulLogIn)
    .catch(err => console.log(err));
  }

  onSuccessfulLogIn(a,b) {
    console.log(a,b);
  }


  render(){
    return (
      <div>
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


    </div>

    );
  }
}

export default App;
