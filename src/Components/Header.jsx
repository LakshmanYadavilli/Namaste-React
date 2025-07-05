import React from "react";
import food_app_logo from "../assets/icon.png";
// import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalItems = useSelector((store) => store.cart.totalItems);

  return (
    <div className="flex justify-between items-center p-4 bg-amber-400 fixed top-0 left-0 right-0 z-10 h-28">
      <img
        src="https://www.canva.com/templates/EAGXsRURT9o-yellow-and-brown-kitchen-food-logo/"
        alt="Food App Logo"
      />

      <ul className="flex  p-4">
        <li className="px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2">
          <Link to="/about">About</Link>
        </li>
        <li className="px-2">Contact</li>
        <li className="px-2">
          <Link to="/cart">Cart</Link>({totalItems})
        </li>
      </ul>
    </div>
  );
};

export default Header;
