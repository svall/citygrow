import React, { Component } from 'react';

const GardenDisplayItem = props => (
  <div>
    <button value={props.name}>Garden name: {props.name}</button>
    <button>Garden Zipcode: {props.zipcode}</button>
    <button>Garden Id: {props.garden_id}</button>
    <button>Quadrants: {Object.quadrant}</button>
  </div>

);

export default GardenDisplayItem;
