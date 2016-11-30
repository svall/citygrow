import React, { Component } from 'react';
import "./GardenList.css";
import GardenListItem from '../GardenListItem/GardenListItem.jsx';
 // similar to firehouse lab, is a list component for all gardens
class GardenList extends Component {

  showGardens(collection) {
    return collection.map((garden, index) =>
      <article className="border"
        key={index} onClick={()=>this.props.changeSelection(index)}>
          <GardenListItem
            key={garden.index}
            name={garden.name}
            zipcode={garden.zipcode}
            />
     </article>
    );
  }
  //populates list with gardens
  componentWillMount() {
    this.props.getAllGardens();
  }

  render(){
    return (
      <div>
        <div className="list-container" >
          {this.showGardens(this.props.collection)}
        </div>
      </div>
    );
  }
}

export default GardenList;
