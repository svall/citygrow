import React, { Component } from 'react';

const GardenDisplayItem = props => (
  <div>
    <form>
      <label>Quadrant Number:
        <input
          type="button"
          value={props.quadrants}
          name={props.quadrants}
          onClick={props.activateQuadrant}
        />
      </label>
      <div>Key: {props.q1}</div>
      <label>Produce Assigned:
        <input
          type="text"
          placeholder="Produce"
          value={props.produce}
          // onChange={props.handleQuadrantSelection}
        />
      </label>
      <label>User Assigned:
        <input
          type="text"
          placeholder="User Name"
          value={props.user}
        />
      </label>
    </form>
  </div>

);

export default GardenDisplayItem;
