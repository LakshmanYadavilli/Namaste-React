import React from "react";

const Shimmer = () => {
  return (
    <div>
      <div className="w-full h-[200px] bg-gray-200"></div>
      <div className="flex flex-wrap">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div
              className="h-[500px] w-[23%] m-[0.5%] bg-gray-200 rounded-sm"
              key={index}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
