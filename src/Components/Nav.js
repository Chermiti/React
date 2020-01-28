import React from "react";
import "./nav.css";
import { Link, withRouter } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white"
  };
  return (
    <nav>
      <h3>Weather Application</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/Home">
          <li>Home</li>
        </Link>
      
        <Link style={navStyle} to="/Login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
