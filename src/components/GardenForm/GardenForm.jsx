import React, { Component } from 'react';
import "./GardenForm.css";

const GardenForm = (props)=> {
    return (

    <div className="header-search-bar">

        <form>
          Create A Garden <input type="text" name="name" placeholder="enter garden name" onChange={props.updateFormName} />
            <input type="text" name="zipcode" placeholder="enter zip" onChange={props.updateFormZip} />
            <input type="text" name="user_id" placeholder="enter ID" onChange={props.updateFormId} />
            <button onClick={props.handleFormSubmit} >Start!</button>
          </form>
    </div>
    );
}

export default GardenForm;
