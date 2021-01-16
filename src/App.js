import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import React, { Fragment } from "react";
// import Api from "./components/Api";
import HomePage from "./components/HomePage";

const App=()=> {
  return(<Fragment>
    {/* <Api /> */}
    <HomePage/>
  </Fragment>);

};


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <Button className="btn btn-success">Test</Button>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
