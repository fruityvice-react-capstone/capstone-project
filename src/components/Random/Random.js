//*used this to set up and test the different methods of getting our random button to run

// import React, { Component } from "react";

// import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";

// class Random extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     name: "",
//   //     species: "",
//   //     type: "",
//   //     status: "",
//   //   };
//   // }

//   randomNumber = () => {
//     const min = 1;
//     const max = 671;
//     return (Math.random() * (max - min) + min).toFixed(0);
//   };

//   // componentDidMount() {
//   //   fetch(`https://rickandmortyapi.com/api/character/${this.randomNumber()}`)
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       console.log("random character", data);
//   //     });
//   // }

//   render() {
//     return (
//       <div>
//         <Button component={Link} to={`/characters/${this.randomNumber}`}>
//           Random
//         </Button>
//       </div>
//     );
//   }
// }

// export default Random;
