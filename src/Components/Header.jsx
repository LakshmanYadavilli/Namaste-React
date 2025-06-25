import React from "react";
import food_app_logo from "../assets/icon.png";
import "./Header.css";

const Header = () => {
  return (
    <div id="header">
      <img
        src="https://www.canva.com/templates/EAGXsRURT9o-yellow-and-brown-kitchen-food-logo/"
        alt="Food App Logo"
      />

      <ul id="nav">
        <li className="navItem">Home</li>
        <li className="navItem">About</li>
        <li className="navItem">Contact</li>
        <li className="navItem">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
