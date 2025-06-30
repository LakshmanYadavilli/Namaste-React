import React from "react";
import { FaStar } from "react-icons/fa";
import "./Card.css";
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
    <Link className="card" to={`/restaurant/menu/${id}`}>
      <img
        src={IMG_URL_PREFIX + cloudinaryImageId}
        alt={name || "restuarant"}
      />
      <h3>{name}</h3>
      <div className="rating">
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
        <h4 className="rating-text">
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
