import React, { Component } from 'react';

import "./gardenDisplay.css";
import GardenDisplayItem from '../GardenDisplayItem/GardenDisplayItem.jsx';

// export default class GardenDisplay extends Component{
//   render(){
//     return (
//       <article className="show-container">
//         <GardenDisplayItem
//           key={this.props.garden.index}
//           name={this.props.garden.name}
//           zipcode={this.props.garden.zipcode}
//           garden_id={this.props.garden_id}
//           quadrants={this.props.quadrants}
//         />
//       </article>
//     );
//   }
// }

class GardenDisplay extends Component {

  showQuadrants(collection) {
    return collection.map((quadrants, index) =>
      // <article className="quadrant-list-item" key={index}}>
        <GardenDisplayItem
          key={quadrants.index}
          // name={this.props.garden.name}
          // zipcode={this.props.garden.zipcode}
          garden_id={quadrants.garden_id}
          quadrants={quadrants.quadrant}
        />
      // </article>
    );
  }
  // componentWillMount() {
  //   this.props.changeSelection();
  // }

  render(){
    return (
      <div>
        <GardenDisplayItem
          // getOneGarden={this.props.getOneGarden}
        />
        <div className="quadrant-container">
         {this.showQuadrants(this.props.collection)}
        </div>
      </div>
    );
  }
}

export default GardenDisplay;
