import React from "react";
import Card from "./Card";
import "./CardContainer.css";
// import restaurants from "../utils/data";

const CardContainer = ({ filterData: restaurants }) => {
  return (
    <div id="cardContainer">
      {restaurants.map((restaurant) => (
        <Card key={restaurant.info.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default CardContainer;
