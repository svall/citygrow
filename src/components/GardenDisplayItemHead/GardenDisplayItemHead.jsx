import React, { Component } from 'react';
import "./GardenDisplayItemHead.css";

const GardenDisplayItemHead = props => (
  <div>
    <div className="garden-item">
      <p>Garden Id: {props.garden_id}</p>
      <p>Garden Zipcode: {props.zipcode}</p>
      <p>Garden Name: {props.name}</p>
    </div>
  </div>

);

export default GardenDisplayItemHead;
