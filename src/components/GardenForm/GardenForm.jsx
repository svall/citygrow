import React, { Component } from 'react';

const GardenForm = (props)=> {
    return (

    <div>
    <h3>Create A Garden</h3>
      <form action="/save" method="POST" accept-charset="utf-8">
        <input type="text" name="name" placeholder="enter garden name" />
        <button>Create!</button>
      </form>

    </div>

    );
}

export default GardenForm;
