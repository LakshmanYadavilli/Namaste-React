import React from "react";
import { FaStar } from "react-icons/fa";
// import { fa-star } from '@awesome.me/kit-KIT_CODE/icons'

const Card = ({ restaurant }) => {
  const { name, cloudinaryImageId, cuisines, avgRatingString, sla } =
    restaurant.info || {};
  return (
    <div id="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/" +
          cloudinaryImageId
        }
        alt={name || "restuarant"}
      />
      <h1>{name}</h1>
      <h3>
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
        {avgRatingString}
        {" • "} {sla.slaString}
      </h3>
    </div>
  );
};

export default Card;
