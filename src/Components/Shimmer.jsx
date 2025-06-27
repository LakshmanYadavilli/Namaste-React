import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div>
      <div className="shimmer-header"></div>
      <div className="shimmer-card-container">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div className="shimmer-card" key={index}></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
