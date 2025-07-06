import { useState, useEffect } from "react";
import { RESTAURANT_API } from "./constants";
const useGetRestaurants = (setFilterData) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(RESTAURANT_API);

        const res = await data.json();

        //

        setData(
          res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilterData(
          res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (error) {
        console.error("error:::", error);
      }
    };
    fetchData();
  }, []);
  return data;
};
export default useGetRestaurants;
