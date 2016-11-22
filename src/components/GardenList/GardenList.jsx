import React, { Component } from 'react';
import GardenListItem from '../GardenListItem/GardenListItem.jsx';

class GardenList extends Component {

  showGardens(collection) {
    return collection.map((house, index) =>
      <article key={index} onClick={()=>this.props.changeSelection(index)}>
        <GardenListItem name={name} />
     </article>
    );
  }


  render(){
    return (
      <div className="list-container">
        {/* render a list of houses based on our props.collection */}
        {this.showGardens(this.props.collection)}
      </div>
    );
  }

}



export default GardenList;
