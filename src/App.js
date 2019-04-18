import React, { Component } from "react";
//import logo from './logo.svg';
import Navbar from "./components/Navbar/index";
import Main from "./components/main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div>
          {" "}
          <Main />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
