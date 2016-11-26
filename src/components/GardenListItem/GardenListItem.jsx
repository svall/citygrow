import React, { Component } from 'react';
import './GardenListItem.css'

const GardenListItem = props => (
  <div className="GardenListItem">
    <p>Garden name: {props.name}</p>
    <p>Garden Zipcode: {props.zipcode}</p>
  </div>

);

export default GardenListItem;
