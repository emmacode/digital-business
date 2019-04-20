import React, { Component } from "react";
import "./index.css";
import {NavLink} from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a href="#" className="navbar-brand">
          <i class="fas fa-cloud white-text"></i> Digital
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#adosResponsive"
            aria-controls="adosResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="adosResponsive">
            <ul className="navbar-nav smooth-scroll ml-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link">
                  Dropdown
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/team" className="nav-link">
                  Team Page
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                 to="/contact"
                  className="nav-link"
                >
                  Contact Page
                </NavLink>
              </li>
            </ul>
            <div>
              <a className="btn white-text" href="#popup3">Login</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
