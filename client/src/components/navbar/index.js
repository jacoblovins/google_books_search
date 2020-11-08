import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

class Nav extends Component {

  render() {
    return (
      <nav className="navbar justify-content-center navbar-expand-lg bg-dark mb-2">
        <h1>Google Books Search</h1>
        <div className="links">
          <NavLink className="search" to="/"> Search </NavLink>
          <NavLink className="saved" to="/saved"> Saved </NavLink>
        </div>

      </nav>
    );
  }
}

export default Nav;
