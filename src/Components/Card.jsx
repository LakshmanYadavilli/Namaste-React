import React from "react";
import { FaStar } from "react-icons/fa";
// import "./Card.css";
import { IMG_URL_PREFIX } from "../utils/constants";
import { Link } from "react-router-dom";

const Card = ({ restaurant }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
    id,
  } = restaurant.info || {};

  return (
    <Link
      to={`/restaurant/menu/${id}`}
      className="w-1/5 p-3 hover:bg-gray-500 rounded-lg shadow-lg"
    >
      <img
        className="w-[96%] h-[200px] rounded-lg shadow-lg "
        src={IMG_URL_PREFIX + cloudinaryImageId}
        alt={name || "restuarant"}
      />
      <h3 className="font-bold p-2">{name}</h3>
      <div className="flex items-center">
        <FaStar
          size={5}
          style={{
            color: "white",
            backgroundColor: "green",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            fontSize: "10px",
            padding: "2px",
          }}
        />
        <h4 className="p-2">
          {avgRatingString}
          {" • "} {sla.slaString}
        </h4>
      </div>

      <h4 className="restuarant-cuisines">{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
    </Link>
  );
};

export default Card;
