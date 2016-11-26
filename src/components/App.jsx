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

      quad_id: 0,
      prod_quad: 0,
      user_quad:0,

      quadrants: [],
      q1: false
    };
  }

  // ====== GET ALL GARDENS AND GET GARDEN BY ID ======== //
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

  // ====== GARDEN CREATION FORM ======== //
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


  // ====== QUADRANTS FORM ======== //
  updateIdQuadrant(e) {
    this.setState({
      quad_id: e.target.value,
    });
    console.log('updating state for quad_id ', this.state.quad_id);
  }

  updateProduceQuadrant(e) {
    this.setState({
      prod_quad: e.target.value,
    });
    console.log('updating state for prod_quad ', this.state.prod_quad);
  }

  updateUserQuadrant(e) {
    this.setState({
      user_quad: e.target.value,
    });
    console.log('updating state for user_quad ', this.state.user_quad);
  }

  // with a post method, handleFormSubmit() adds a new garden to the db
  handleQuadrantForm(e) {
    console.log('in app quad form quad Id', this.state.quad_id)
    fetch(`/db/gardens/quadrants/${this.state.quad_id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        quad_id: this.state.quad_id,
        produce_id: this.state.prod_quad,
        user_id: this.state.user_quad
      })
    })
    .then(this.setState({
        quad_id: 0,
        produce_id: 0,
        user_id: 0
    }))
    .then(this.changeSelection(this.state.garden_id))
    .catch(err => console.log(err));
  }

  // changes the state of a quadrant when it has been clicked on
  // activateQuadrant(e) {
  //   this.setState({
  //     q1: true,
  //     q2: true,
  //   })
  //   console.log('q1 is active ', this.state.q1);
  //   console.log('q2 is active ', this.state.q2);
  // }

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

        quad_id={this.state.quad_id}
        prod_quad={this.state.prod_quad}
        user_quad={this.state.user_quad}
        updateIdQuadrant={event => this.updateIdQuadrant(event)}
        updateProduceQuadrant={event => this.updateProduceQuadrant(event)}
        updateUserQuadrant={event => this.updateUserQuadrant(event)}
        handleQuadrantForm={event => this.handleQuadrantForm()}

        // activateQuadrant={event => this.activateQuadrant(event)}
        // q1={this.state.q1}
        // q2={this.state.q2}
      />

      </div>
    );
  }
}

export default App;
