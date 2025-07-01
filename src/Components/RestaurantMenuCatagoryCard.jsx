import React from "react";

const RestaurantMenuCatagoryCard = ({
  item,
  idx,
  isOpened,
  setOpenedCatagory,
}) => {
  console.log("idx:::", idx);

  return (
    <div
      key={idx}
      className="border border-gray-500 p-3 m-3 rounded-2xl w-full mx-auto cursor-pointer"
      onClick={() => {
        console.log("clicked");
        setOpenedCatagory((prev) => {
          console.log("prev:::", prev, "idx:::", idx);
          return prev === idx ? null : idx;
        });
      }}
    >
      <div className="flex justify-between items-center bg-green-300 p-3 rounded-lg ">
        <h2 style={{ color: "blue" }}>
          {item?.card?.card?.title}({item?.card?.card?.itemCards?.length})
        </h2>

        {isOpened ? "🔼" : "🔽"}
      </div>
      {isOpened && (
        <div>
          {item.card?.card?.itemCards?.map((itemcard, index) => {
            if (!itemcard?.card?.info) return null; // Skip if info is not available
            const { id, name, price, defaultPrice } = itemcard?.card?.info;
            return (
              <div key={id} className="flex p-3 justify-between">
                <h3>{name}</h3>
                <p>Price:{price ? price / 100 : defaultPrice / 100}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenuCatagoryCard;
