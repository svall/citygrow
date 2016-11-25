import React, { Component } from 'react';
import GardenForm from './GardenForm/GardenForm.jsx';
import GardenList from './GardenList/GardenList.jsx';
// import GardenListItem from './GardenListItem/GardenListItem.jsx';
import GardenDisplay from './GardenDisplay/GardenDisplay.jsx';
// import style from './App.css';

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
      user_id: '',
      produce: 0,
      user: 0,
      prod_quad: 0,
      user_quad:0,
      quadrants: [],
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
      q6: false,
      q7: false,
      q8: false,
      q9: false
    };
  }

  // displays the info for the garden clicked on from the garden list, it sets that garden's info to the "selected" state
  // with the id of the garden, it does a fetch call and gets from the quadrants table all quadrants with that garden id
  changeSelection(num) {
    // getOneGarden()
    this.setState({
      selected: this.state.gardens[num],
      garden_id: this.state.gardens[num].id
    });
    // console.log('garden id in app.js', this.state.gardens[num].id);
    fetch(`/db/gardens/${this.state.gardens[num].id}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        quadrants: data
      });
      // console.log('************App.jsxs data: ', data[0].quadrant);
    })
    .catch(err => console.log(err));
    // console.log("this is the state of selected ", this.state.garden_id);
  }

  // gets all gardens from the gardens db, saves in array in "gardens" state
  getAllGardens() {
    fetch(`/db/gardens`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        gardens: data
      });
      // console.log("this is gardens all: ", data);
    })
    .catch(err => console.log(err));
  }

  // form elements to update info about new gardens
  updateFormName(e) {
    this.setState({
      name: e.target.value,
    });
    // console.log(this.state.name);
  }

  updateFormZip(e) {
    this.setState({
      zipcode: e.target.value,
    });
    // console.log(this.state.zipcode);
  }

  updateFormId(e) {
    this.setState({
      user_id: e.target.value,
    });
    // console.log(this.state.user_id);
  }

  // with a post method, handleFormSubmit() adds a new garden to the db
  handleFormSubmit() {
    fetch('/db/gardens', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        zipcode: this.state.zipcode,
        user_id: this.state.user_id
      })
    })
    .then(this.setState({
      name: '',
      zipcode: '',
      user_id: ''
    }))
    .then(this.getAllGardens())
    .catch(err => console.log(err));
  }

  // changes the state of a quadrant when it has been clicked on
  activateQuadrant(e) {
    this.setState({
      q1: true,
      q2: true,
    })
    console.log('q1 is active ', this.state.q1);
    console.log('q2 is active ', this.state.q2);
  }


  render() {
    return (
      <div>
      <header>
        <h1>CityGrow</h1>
      </header>
      <GardenForm
        name={this.state.name}
        zipcode={this.state.zipcode}
        user_id={this.state.user_id}
        updateFormName={event => this.updateFormName(event)}
        updateFormZip={event => this.updateFormZip(event)}
        updateFormId={event => this.updateFormId(event)}
        handleFormSubmit={event => this.handleFormSubmit()}
        getLastGardenId={event => this.getLastGardenId(event)}
        updateFormGardenId={event => this.updateFormGardenId(event)}
        garden_id={this.state.garden_id}

      />
      <h1>**********Garden List************</h1>
      <GardenList
        getAllGardens={this.getAllGardens.bind(this)}
        collection={this.state.gardens}
        changeSelection={this.changeSelection.bind(this)}
      />
      <h1>***********Garden Display***********</h1>
      <GardenDisplay
        garden={this.state.selected}
        garden_id={this.state.garden_id}
        collection={this.state.quadrants}
        quadrants={this.state.quadrants}
        // handleQuadrantSelection={event => this.handleQuadrantSelection(event)}
        prod_quad={this.state.prod_quad}
        user_quad={this.state.user_quad}
        activateQuadrant={event => this.activateQuadrant(event)}
        q1={this.state.q1}
        q2={this.state.q2}
      />

      </div>
    );
  }
}

export default App;
