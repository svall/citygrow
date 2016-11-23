import React, { Component } from 'react';
import GardenForm from './GardenForm/GardenForm.jsx';
import GardenList from './GardenList/GardenList.jsx';
// import GardenListItem from './GardenListItem/GardenListItem.jsx';
import GardenDisplay from './GardenDisplay/GardenDisplay.jsx';
// import style from './App.css';

class App extends Component {

  constructor(props) {
    super();
    console.log(this);
    this.state = {
      gardens: [],
      selected: '',
      name: '',
      zipcode: '',
      user_id: ''
    };
  }

  changeSelection(num) {
    this.setState({
      selected: this.state.gardens[num],
    });
  }

  getAllGardens() {
    fetch(`/db/gardens`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        gardens: data
      });
      console.log('************App.jsx data: ' + data);
    })
    .catch(err => console.log(err));
  }

  updateFormName(e) {
    this.setState({
      name: e.target.value,
    });
    console.log(this.state.name);
  }

  updateFormZip(e) {
    this.setState({
      zipcode: e.target.value,
    });
    console.log(this.state.zipcode);
  }

  updateFormId(e) {
    this.setState({
      user_id: e.target.value,
    });
    console.log(this.state.user_id);
  }

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
      />

      </div>
    );
  }
}

export default App;
