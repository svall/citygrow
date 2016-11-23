import React, { Component } from 'react';
import "./GardenForm.css";

const GardenForm = (props)=> {
    return (

    <div className="header-search-bar">
    <h3>Create A Garden</h3>

      <form>
        <input type="text" name="name" placeholder="enter garden name" onChange={props.updateFormName} />
        <input type="text" name="zipcode" placeholder="enter zip" onChange={props.updateFormZip} />
        <input type="text" name="user_id" placeholder="enter ID" onChange={props.updateFormId} />
        <button className="btn btn-primary" onClick={props.handleFormSubmit}>Start!</button>
      </form>
    </div>
    );
}

export default GardenForm;
