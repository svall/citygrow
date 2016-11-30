import React, { Component } from 'react';
import './GardenListItem.css'
// similar to fire trucks lab, renders a list of garden items
const GardenListItem = props => (
  <div className="GardenListItem">
    <p>Garden name: {props.name}</p>
    <p>Garden Zipcode: {props.zipcode}</p>
  </div>

);

export default GardenListItem;
