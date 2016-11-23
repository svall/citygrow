import React, { Component } from 'react';

const GardenDisplayItem = props => (
  <div>

    <p>Garden name: {props.name}</p>
    <p>Garden Zipcode: {props.zipcode}</p>
    <p>Garden Id: {props.garden_id}</p>
    <p>Quadrants: {props.quadrants}</p>
  </div>

);

export default GardenDisplayItem;
