import React, { Component } from 'react';
import './GardenDisplayItem.css';

const GardenDisplayItem = props => (

  <div className="garden-item">
    <form>
      <div>Key: {props.q1}</div>
      <div>Quad ID: {props.quadrants}</div>
      <label>Quadrant Number:
        <input
          type="text"
          value={props.quadrants}
          // name={props.quadrants}
          // onClick={props.activateQuadrant}
          onChange={props.updateIdQuadrant}
          // onClick={() => props.handleQuadrantForm(props.quad_id)}
        />
      </label><br></br>
      <label>Produce Assigned:
        <p>{props.produce}</p>
        <input
          type="text"
          placeholder="Produce"
          onChange={props.updateProduceQuadrant}
        />
      </label><br></br>
      <label>User Assigned:
        <p>{props.user}</p>
        <input
          type="text"
          placeholder="User Name"
          onChange={props.updateUserQuadrant}
        />
      </label><br></br>
      <input
          type="button"
          name="submit"
          value="SELECT"
          // onClick={props.activateQuadrant}
          // onChange={props.updateIdQuadrant}
          onClick={() => props.handleQuadrantForm(props.quadrants)}
        />
    </form>
    <br>

    </br>
  </div>
);

// class GardenDisplayItem extends Component {

//   render(props) {
//     return(
//       <div>
//         <form>
//           <div>Key: {this.props.q1}</div>
//           <div>Quad ID: {this.props.quadrants}</div>
//           <label>Quadrant Number:
//             <input
//               type="text"
//               value={this.props.quadrants}
//               // name={props.quadrants}
//               // onClick={props.activateQuadrant}
//               onChange={this.props.updateIdQuadrant}
//               // onClick={() => props.handleQuadrantForm(props.quad_id)}
//             />
//           </label>
//           <label>Produce Assigned:
//             <input
//               type="text"
//               placeholder="Produce"
//               value={this.props.produce}
//               onChange={this.props.updateProduceQuadrant}
//             />
//           </label>
//           <label>User Assigned:
//             <input
//               type="text"
//               placeholder="User Name"
//               value={this.props.user}
//               onChange={this.props.updateUserQuadrant}
//             />
//           </label>
//           <input
//               type="button"
//               name="submit"
//               value="SELECT"
//               // onClick={props.activateQuadrant}
//               // onChange={props.updateIdQuadrant}
//               onClick={() => this.props.handleQuadrantForm()}
//             />
//         </form>
//         <br>
//         </br>
//       </div>

//       )
//   }
// }

export default GardenDisplayItem;
