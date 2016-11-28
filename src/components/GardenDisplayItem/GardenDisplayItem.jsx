import React, { Component } from 'react';
import './GardenDisplayItem.css';


class GardenDisplayItem extends Component {
  render() {
    return(
      <div>
        <div className="quadrant-item">
          <form className="quadrantForm">
            <div>Quadrant #: {this.props.q1}</div>
            <button
              className="quadrantSelectButton"
              type="button"
              value={this.props.quadrants}
              onClick={this.props.updateIdQuadrant}
            >SELECT</button><br></br><br></br>
            <div className="productUserPopup">
              <label>
                <input
                  type="hidden"
                  value={this.props.quadrants}
                  // name={props.quadrants}
                  // onClick={props.activateQuadrant}
                  // onChange={props.updateIdQuadrant}
                  // onClick={() => props.handleQuadrantForm(props.quad_id)}
                />
              </label>
              <label>Produce Assigned:
                <p>{this.props.produce}</p>
                <input
                  type="text"
                  placeholder="Produce"
                  onChange={this.props.updateProduceQuadrant}
                />
              </label><br></br>
              <label>User Assigned:
                <p>{this.props.user}</p>
                <input
                  type="text"
                  placeholder="User Name"
                  onChange={this.props.updateUserQuadrant}
                />
              </label><br></br>
              <input
                  type="button"
                  name="submit"
                  value="RESERVE AREA"
                  // onClick={props.activateQuadrant}
                  // onChange={props.updateIdQuadrant}
                  onClick={() => this.props.handleQuadrantForm(this.props.quadrants)}
                />
              </div>
          </form>
        </div>
      </div>
      )
  }
}
// const GardenDisplayItem = props => (




// const GardenDisplayItem = props => (

//   <div>
//     <div className="quadrant-item">
//       <form className="quadrantForm">
//         <div>Quadrant #: {props.q1}</div>
//         <button
//           className="quadrantSelectButton"
//           type="button"
//           value={props.quadrants}
//           onClick={props.updateIdQuadrant}
//         >SELECT</button><br></br><br></br>
//         <div className="productUserPopup">
//           <label>
//             <input
//               type="hidden"
//               value={props.quadrants}
//               // name={props.quadrants}
//               // onClick={props.activateQuadrant}
//               // onChange={props.updateIdQuadrant}
//               // onClick={() => props.handleQuadrantForm(props.quad_id)}
//             />
//           </label>
//           <label>Produce Assigned:
//             <p>{props.produce}</p>
//             <input
//               type="text"
//               placeholder="Produce"
//               onChange={props.updateProduceQuadrant}
//             />
//           </label><br></br>
//           <label>User Assigned:
//             <p>{props.user}</p>
//             <input
//               type="text"
//               placeholder="User Name"
//               onChange={props.updateUserQuadrant}
//             />
//           </label><br></br>
//           <input
//               type="button"
//               name="submit"
//               value="RESERVE AREA"
//               // onClick={props.activateQuadrant}
//               // onChange={props.updateIdQuadrant}
//               onClick={() => props.handleQuadrantForm(props.quadrants)}
//             />
//           </div>
//       </form>
//     </div>
//   </div>
// );




// const GardenDisplayItem = props => (

//   <div className="garden-item">
//     <form>
//       <div>Quadrant #: {props.q1}</div>
//       <div>Quad ID: {props.quadrants}</div><br></br>
//       <button
//         type="button"
//         value={props.quadrants}
//         onClick={props.updateIdQuadrant}
//       >SELECT</button>
//       <label>Quadrant Number:
//         <input
//           type="text"
//           value={props.quadrants}
//           // name={props.quadrants}
//           // onClick={props.activateQuadrant}
//           onChange={props.updateIdQuadrant}
//           // onClick={() => props.handleQuadrantForm(props.quad_id)}
//         />
//       </label><br></br>
//       <label>Produce Assigned:
//         <p>{props.produce}</p>
//         <input
//           type="text"
//           placeholder="Produce"
//           onChange={props.updateProduceQuadrant}
//         />
//       </label><br></br>
//       <label>User Assigned:
//         <p>{props.user}</p>
//         <input
//           type="text"
//           placeholder="User Name"
//           onChange={props.updateUserQuadrant}
//         />
//       </label><br></br>
//       <input
//           type="button"
//           name="submit"
//           value="RESERVE LAND"
//           // onClick={props.activateQuadrant}
//           // onChange={props.updateIdQuadrant}
//           onClick={() => props.handleQuadrantForm(props.quadrants)}
//         />
//     </form>
//     <br>

//     </br>
//   </div>
// );


export default GardenDisplayItem;
