import Header from "./Header";
import icon from "../assets/icon.png";

import "./App.css";
import restaurants from "../utils/data";
import React, { useState, useMemo, useEffect } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <img src="https://www.google.com/imgres?q=food%20app%20logo&imgurl=https%3A%2F%2Fmarketplace.canva.com%2FEAFaFUz4aKo%2F3%2F0%2F1600w%2Fcanva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg&imgrefurl=https%3A%2F%2Fwww.canva.com%2Ftemplates%2Fs%2Ffood-logo%2F&docid=UFP4zOfACVBHDM&tbnid=eXNVs_9IqH569M&vet=12ahUKEwiSpcTagoqOAxW2d2wGHWW_HRsQM3oECGYQAA..i&w=1600&h=1600&hcb=2&ved=2ahUKEwiSpcTagoqOAxW2d2wGHWW_HRsQM3oECGYQAA" alt="Food App Logo" /> */}
      <Header />
      <div id="app-children">
        <Outlet />
      </div>
    </div>
  );
};
export default App;
