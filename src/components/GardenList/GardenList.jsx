import React, { Component } from 'react';
import GardenListItem from '../GardenListItem/GardenListItem.jsx';

class GardenList extends Component {

  showGardens(collection) {
    return collection.map((garden, index) =>
      <article className="garden-list-item" key={index} onClick={()=>this.props.changeSelection(index)}>
        <GardenListItem
          key={garden.index}
          name={garden.name}
          zipcode={garden.zipcode}
        />
     </article>
    );
  }

  componentWillMount() {
    this.props.getAllGardens();
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
