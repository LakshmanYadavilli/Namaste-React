import React from "react";
import food_app_logo from "../assets/icon.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <img
        src="https://www.canva.com/templates/EAGXsRURT9o-yellow-and-brown-kitchen-food-logo/"
        alt="Food App Logo"
      />

      <ul id="nav">
        <li className="navItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navItem">
          <Link to="/about">About</Link>
        </li>
        <li className="navItem">Contact</li>
        <li className="navItem">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
