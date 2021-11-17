// App.js
// import React, { Component } from "react";
// import "./App.css";
// import { connect, sendMsg } from "./api";
// import Header from './components/Header/Header';
// // ...

// class App extends Component {
//   constructor(props) {
//     super(props);
//     connect();
//   }

//   send() {
//     console.log("hello");
//     sendMsg("hello");
//   }

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.send}>Hit</button>
//       </div>
//     );
//   }
// }

// export default App;

// App.js
// Import our new component from it's relative path
import Header from './components/Header/Header';
// ...
render() {
  return (
    <div className="App">
      <Header />
      <button onClick={this.send}>Hit</button>
    </div>
  );
}