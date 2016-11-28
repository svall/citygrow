import React, { Component } from 'react';
import './GardenDisplayItem.css';

// function assignment() {
//   htmlFor(let i = 0; i < 9; i++) {

//   let product = document.querySelectorAll(".productLength")[1];
//   console.log('product is ', product)
//   if(product === null) {
//     console.log('product is null')
//   }
//   else {
//     console.log('product is not null')
//   }
// }
  // <h4 className="productLength">2nd - Produce: {this.props.produce}</h4>
// }

// <label><h4 className="dataFromDB">3rd - User: <p style={"font-weight: bold; color:red"}>{this.props.user}</p></h4>

const divStyle = {
  color: '#7f0000',
  fontWeight: 'bold',
  // border: '1px solid black',
};

class GardenDisplayItem extends Component {
  render() {
  // assignment();
    return(
      // <div>
        <div className="quadrant-item" id={this.props.q1}>
          <form className="quadrantForm">

            <button
              className="quadrantSelectButton"
              type="button"
              value={this.props.quadrants}
              onClick={this.props.updateIdQuadrant}
            >SELECT AREA # {(this.props.q1) + 1}</button><br></br><br></br>
            <div className="productUserPopup">
                <input
                  type="hidden"
                  value={this.props.quadrants}
                />
                <h4 className="dataFromDB">Produce planted: </h4>
                <h2 className="dbNumber" style={divStyle}> {this.props.produce} </h2><br></br>
                <input
                  className="userProdInput"
                  type="text"
                  placeholder="Prod. ID"
                  onChange={this.props.updateProduceQuadrant}
                /><br></br>
                <h4 className="dataFromDB">Current User: </h4>
                <h2 className="dbNumber" style={divStyle}> {this.props.user} </h2><br></br>
                <input
                  className="userProdInput"
                  type="text"
                  placeholder="User ID"
                  onChange={this.props.updateUserQuadrant}
                /><br></br><br></br>
              <input
                className="reserveButton"
                type="button"
                name="submit"
                value="RESERVE"
                onClick={() => this.props.handleQuadrantForm(this.props.quadrants)}
                />
              </div>
          </form>
        </div>
      // </div>
      )
  //   }

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
