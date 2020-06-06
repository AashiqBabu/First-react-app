import React, { Component } from "react";
import "./App.css";
import "./components/header/header.css";
import Holder from "./components/Holder";
import NavBar from "./components/header/NavBar";

class App extends Component {
  render() {
    return (
      <div id="ultimate">
        <div className="App w3-camo-black">To-Do's</div>
        <div className="NavBar">
          <NavBar />
        </div>
        <Holder />
      </div>
    );
  }
}

export default App;
