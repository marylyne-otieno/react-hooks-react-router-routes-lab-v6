/*
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/directors" className="nav-link">
        Directors
      </NavLink>
      <NavLink to="/actors" className="nav-link">
        Actors
      </NavLink>
      <NavLink to="/movie/1" className="nav-link">
        Movie
      </NavLink>
    </nav>
  );
}

export default NavBar;
*/
/*
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
  );
}

export default NavBar;

*/
// components/NavBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/directors">Directors</NavLink>
        <NavLink to="/actors">Actors</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
