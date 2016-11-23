import React, { Component } from 'react';

const GardenForm = (props)=> {
    return (

    <div>
    <h3>Create A Garden</h3>
      <form>
        <input type="text" name="name" placeholder="enter garden name" onChange={props.updateFormName} />
        <input type="text" name="zipcode" placeholder="enter zip" onChange={props.updateFormZip} />
        <input type="text" name="user_id" placeholder="enter ID" onChange={props.updateFormId} />
        <button onClick={props.handleFormSubmit}>Create!</button>
      </form>

    </div>

    );
}

export default GardenForm;
