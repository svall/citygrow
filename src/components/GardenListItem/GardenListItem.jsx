import React, { Component } from 'react';

const GardenListItem = props => (
  <div>

    <p>Garden name: {props.name}</p>
    <p>Garden Zipcode: {props.zipcode}</p>

  </div>

);

export default GardenListItem;
