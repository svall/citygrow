import React, { Component } from 'react';
import GardenForm from './GardenForm/GardenForm.jsx';
import GardenList from './GardenList/GardenList.jsx';
// import GardenListItem from './GardenListItem/GardenListItem.jsx';
// import style from './App.css';

class App extends Component {


  render() {
    return (
      <div>
      <header>
        <h1>CityGrow</h1>
      </header>
      <GardenForm />
      <GardenList />

      </div>
    );
  }
}

export default App;
