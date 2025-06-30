import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetRestaurantMenu from "../utils/useGetRestaurantMenu";

const RestuarantMenu = () => {
  const { res_id } = useParams();
  const resMenu = useGetRestaurantMenu(res_id);

  if (resMenu?.length === 0) return <div>RestuarantMenu</div>;

  return (
    <div>
      <h1 style={{ color: "red" }}>Catagories</h1>
      {resMenu.slice(2).map((item, idx) => {
        if (!item?.card?.card?.title || !item?.card?.card?.itemCards)
          return null; // Skip if title or itemCards are not available
        return (
          <div key={idx}>
            <h2 style={{ color: "blue" }}>{item.card.card.title}</h2>
            <h2>Items:</h2>
            {item.card?.card?.itemCards?.map((itemcard, index) => {
              if (!itemcard?.card?.info) return null; // Skip if info is not available
              const { id, name, price, description } = itemcard?.card?.info;
              return (
                <div key={id}>
                  <h3>{name}</h3>
                  <p>Price: {price / 100}</p>
                  {description && <p>Description: {description}</p>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RestuarantMenu;
