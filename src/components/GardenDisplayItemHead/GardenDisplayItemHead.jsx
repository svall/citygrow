import React, { Component } from 'react';
import "./GardenDisplayItemHead.css";

const GardenDisplayItemHead = props => (
  <div>
    <p>Garden Id: {props.garden_id}</p>
    <p>Garden Zipcode: {props.zipcode}</p>
    <p>Garden Name: {props.name}</p>

  </div>

);

export default GardenDisplayItemHead;
