import React, { Component } from 'react';
import "./gardenDisplay.css";
import GardenDisplayItem from '../GardenDisplayItem/GardenDisplayItem.jsx';
import GardenDisplayItemHead from '../GardenDisplayItemHead/GardenDisplayItemHead.jsx';

class GardenDisplay extends Component {

  // maps throught the quadrants array saved in "quadrants" state, then passes to GardenDisplayItem the data for each quadrant
  showQuadrants(quadrants) {
    console.log('in gard disp', this.props.quadrants);
    return this.props.quadrants.map((quadrants, i) =>
        <GardenDisplayItem
          key={i}
          name={quadrants.name}
          user={quadrants.user}
          produce={quadrants.produce}
          quadrants={quadrants.quadrant}
          q1={i}

          updateIdQuadrant={this.props.updateIdQuadrant}
          updateProduceQuadrant={this.props.updateProduceQuadrant}
          updateUserQuadrant={this.props.updateUserQuadrant}
          handleQuadrantForm={this.props.handleQuadrantForm}
          quad_id={this.props.quad_id}
          prod_quad={this.props.prod_quad}
          user_quad={this.props.user_quad}
          // q2={this.props.q2}
        />
    );
  }

  render(){
    return (
      <div>
        <GardenDisplayItemHead
          name={this.props.garden.name}
          zipcode={this.props.garden.zipcode}
          garden_id={this.props.garden_id}
        />
        <GardenDisplayItem
          // activateQuadrant={this.props.activateQuadrant.bind(this)}
          garden_id={this.props.garden_id}

          // quad_id={this.props.quad_id}
          // prod_quad={this.props.prod_quad}
          // user_quad={this.props.user_quad}
          // updateIdQuadrant={this.props.updateIdQuadrant.bind(this)}
          // updateProduceQuadrant={this.props.updateProduceQuadrant.bind(this)}
          // updateUserQuadrant={this.props.updateUserQuadrant.bind(this)}
          // handleQuadrantForm={this.props.handleQuadrantForm.bind(this)}

          // q1={this.props.q1}
          // handleQuadrantSelection={this.props.handleQuadrantSelection}
          // getOneGarden={this.props.getOneGarden}
        />
        <div className="quadrant-container">
         {this.showQuadrants(this.props.quadrants)}
        </div>

      </div>
    );
  }
}

export default GardenDisplay;
