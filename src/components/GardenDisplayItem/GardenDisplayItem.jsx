import React, { Component } from 'react';
import './GardenDisplayItem.css';

const GardenDisplayItem = props => (
  <div className="garden-item">
    <p>Garden name: {props.name}</p>
    <p>Garden Zipcode: {props.zipcode}</p>
    <p>Garden Id: {props.garden_id}</p>
    <p>Quadrants: {props.quadrants}</p>
  </div>

);

export default GardenDisplayItem;
