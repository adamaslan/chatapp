//App.js
import React from "react";
import "./App.css";
import { connect, sendMsg } from "./api";

import Header from "./components/Header/Header";
//import Header from './components/Header/Header';

// ...

class App extends Component {
  constructor(props) {
    super(props);
    connect();
  }

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  // App.js
  // Import our new component from it's relative path
  // ...
  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;
