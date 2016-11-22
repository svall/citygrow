import React, { Component } from 'react';
import GardenListItem from '../GardenListItem/GardenListItem.jsx';

class GardenList extends Component {


  render(){
    return (
      <div>
      <div>
        <h3>Choose from existing gardens: </h3>
      </div>
        <GardenListItem
        />
        <GardenListItem />


      </div>
    );
  }

}



export default GardenList;
