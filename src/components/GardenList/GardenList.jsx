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
<<<<<<< HEAD
      <div>
      <div>
        <h3>Choose from existing gardens: </h3>
      </div>
        <GardenListItem
        />
        <GardenListItem />


=======
      <div className="list-container">
        {/* render a list of houses based on our props.collection */}
        {this.showGardens(this.props.collection)}
>>>>>>> 6bb9e7a545866dd236dc9d6bf35cb5493f6f4d3a
      </div>
    );
  }

}



export default GardenList;
