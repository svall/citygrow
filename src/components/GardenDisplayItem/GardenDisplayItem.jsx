import React, { Component } from 'react';
import './GardenDisplayItem.css';


class GardenDisplayItem extends Component {
  render() {
    for(let i = 0; i < 9; i++) {
      // if({this.props.q1} > 1) {


    return(
      // <div>
        <div className="quadrant-item" id={this.props.q1}>
          <form className="quadrantForm">
            <h4>1st - Chose Quadrant: {this.props.q1}</h4>
            <button
              className="quadrantSelectButton"
              type="button"
              value={this.props.quadrants}
              onClick={this.props.updateIdQuadrant}
            >SELECT THIS QUADRANT</button><br></br><br></br>
            <div className="productUserPopup">
                <input
                  type="hidden"
                  value={this.props.quadrants}
                />
              <label><h4>2nd - Produce: {this.props.produce}</h4>
                <input
                  className="userProdInput"
                  type="text"
                  placeholder="Produce"
                  onChange={this.props.updateProduceQuadrant}
                />
              </label><br></br>
              <label><h4>3rd - User: {this.props.user}</h4>
                <input
                  className="userProdInput"
                  type="text"
                  placeholder="User Name"
                  onChange={this.props.updateUserQuadrant}
                />
              </label><br></br><br></br>

              <input
                className="reserveButton"
                type="button"
                name="submit"
                value="RESERVE AREA"
                onClick={() => this.props.handleQuadrantForm(this.props.quadrants)}
                />
              </div>
          </form>
        </div>
      // </div>
      )
    }

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
