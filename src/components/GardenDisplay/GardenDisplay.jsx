import React, { Component } from 'react';

import "./gardenDisplay.css";
import GardenDisplayItem from '../GardenDisplayItem/GardenDisplayItem.jsx';

export default class GardenDisplay extends Component{
  render(){
    return (
      <article className="show-container">
        <GardenDisplayItem
          key={this.props.garden.index}
          name={this.props.garden.name}
          zipcode={this.props.garden.zipcode}
          garden_id={this.props.garden_id}
          quadrants={this.props.quadrants}
        />
      </article>
    );
  }
}
