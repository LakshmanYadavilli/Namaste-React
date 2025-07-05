import React from "react";
import Card from "./Card";
// import "./CardContainer.css";
// import restaurants from "../utils/data";

const CardContainer = ({ filterData: restaurants }) => {
  return (
    <div className="flex flex-wrap p-3">
      {restaurants?.map((restaurant) => (
        <Card key={restaurant.info.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default CardContainer;
