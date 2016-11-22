import React, { Component } from 'react';
import "./fardenDisplay.css";
import GardenListItem from '../GardenListItem/GardenListItem.jsx';

export default class GardenDisplay extends Component{
  render(){
    return (
      <article className="show-container">
        <GardenListItem
          key={this.props.garden.index}
          name={this.props.garden.name}
          zipcode={this.props.garden.zipcode}
        />
      </article>
    );
  }
}
