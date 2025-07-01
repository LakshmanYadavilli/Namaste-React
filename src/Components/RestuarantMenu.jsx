import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetRestaurantMenu from "../utils/useGetRestaurantMenu";
import RestaurantMenuCatagoryCard from "./RestaurantMenuCatagoryCard";

const RestuarantMenu = () => {
  const { res_id } = useParams();
  const [openedCatagory, setOpenedCatagory] = useState(0);
  console.log("openedCatagory:::", openedCatagory);

  const resMenu = useGetRestaurantMenu(res_id);

  if (resMenu?.length === 0) return <div>RestuarantMenu</div>;

  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-red-500 font-bold text-2xl m-3">Catagories</h1>
      {resMenu.slice(2).map((item, idx) => {
        if (!item?.card?.card?.title || !item?.card?.card?.itemCards)
          return null; // Skip if title or itemCards are not available
        console.log("idx:::", idx);
        return (
          <RestaurantMenuCatagoryCard
            key={idx}
            item={item}
            isOpened={idx === openedCatagory}
            setOpenedCatagory={setOpenedCatagory}
            idx={idx}
          />
        ); // Use the component to render each category
      })}
    </div>
  );
};

export default RestuarantMenu;
