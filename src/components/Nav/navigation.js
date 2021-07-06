import React from "react";
import "./styles.scss";

function Nav() {
  return (
    <nav className="navbar">
      <ul className="ul-nav">
        <li className="logo">Logo</li>
        <li>About</li>
        <li>Community</li>
        <li>Location</li>
        <li>Our Menu</li>
        <li>Recipes</li>
      </ul>
      <ul className="ul-nav">
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}
export default Nav;
