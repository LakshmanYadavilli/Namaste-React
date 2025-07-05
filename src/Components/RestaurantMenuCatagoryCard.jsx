import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { IMG_URL_PREFIX } from "../utils/constants";

const RestaurantMenuCatagoryCard = ({
  item,
  idx,
  isOpened,
  setOpenedCatagory,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const handleAdd = (data) => dispatch(addItem({ data }));
  return (
    <div key={idx} className=" w-full mx-auto ">
      <div
        className="flex my-2 justify-between items-center bg-green-300 p-3 rounded-lg cursor-pointer "
        onClick={() => {
          setOpenedCatagory((prev) => {
            return prev === idx ? null : idx;
          });
        }}
      >
        <h2 style={{ color: "blue" }}>
          {item?.card?.card?.title}({item?.card?.card?.itemCards?.length})
        </h2>

        {isOpened ? "🔼" : "🔽"}
      </div>
      {isOpened && (
        <div>
          {item.card?.card?.itemCards?.map((itemcard, index) => {
            if (!itemcard?.card?.info) return null; // Skip if info is not available
            const { id, name, price, defaultPrice, description, imageId } =
              itemcard?.card?.info;
            return (
              <div
                key={id}
                className="border border-gray-500 p-3 m-3 rounded-lg shadow-lg flex p-3 justify-between "
              >
                <div className="w-4/5">
                  <h3 className="font-bold">{name}</h3>
                  <p className="font-bold">
                    Price:{price ? price / 100 : defaultPrice / 100}
                  </p>
                  <p className="line-clamp-2 w-full">{description}</p>
                </div>
                <div className="bg-red-700 py-2 w-1/5 flex flex-col items-center justify-between">
                  <img
                    className="w-32"
                    src={`${IMG_URL_PREFIX}${imageId}`}
                    alt={name}
                  />
                  {!cart?.items[id]?.quanity ? (
                    <button
                      className="bg-black text-white m-auto p-2 cursor-pointer"
                      onClick={() => handleAdd({ id, name, price })}
                    >
                      ADD
                    </button>
                  ) : (
                    <div>
                      {" "}
                      <button
                        className="text-3xl text-green-500 cursor-pointer"
                        onClick={() => handleAdd({ id, name, price })}
                      >
                        +
                      </button>
                      <span className="text-white mx-2">
                        {cart?.items[id]?.quanity}
                      </span>
                      <button
                        className="text-3xl text-green-500 cursor-pointer"
                        onClick={() => dispatch(removeItem(id))}
                      >
                        -
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenuCatagoryCard;
