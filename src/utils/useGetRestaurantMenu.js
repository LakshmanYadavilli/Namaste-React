import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useGetRestaurantMenu = (restaurantId) => {
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    const fetchMenu = async () => {
      const data = await fetch(RESTAURANT_MENU_API + restaurantId);

      const res = await data.json();
      console.log("res:::", res);

      setResMenu(
        res?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
    };
    fetchMenu();
  }, []);
  return resMenu;
};

export default useGetRestaurantMenu;
