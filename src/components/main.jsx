import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/index";
import Team from "./Team/index";
import Contact from "./Contact/index";
import "../App.css";
class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/team" component={Team} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default Main;
