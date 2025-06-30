import React, { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";
import Shimmer from "./Shimmer";
import CardContainer from "./CardContainer";
const Home = () => {
  const [filterData, setFilterData] = useState([]);
  const [data, setData] = useState([]);
  const [serachValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560"
        );
        const res = await data.json();
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

  const handleTopRatedRestaurants = () => {
    const topRatedRestaurants = data.filter(
      (restaurant) => restaurant.info.avgRating >= 4.5
    );

    setFilterData(topRatedRestaurants);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchResData = data.filter(
      (restuarant) =>
        restuarant.info.name
          .toLowerCase()
          .includes(serachValue.toLowerCase()) ||
        restuarant.info.cuisines
          .join(", ")
          .toLowerCase()
          .includes(serachValue.toLowerCase())
    );
    setFilterData(searchResData);
    setSearchValue("");
  };

  if (data?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div id="body">
      <div id="searchContainer">
        <input
          id="searchInput"
          type="text"
          placeholder="Search for food items"
          value={serachValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div
          style={{
            borderLeft: "2px solid grey",
            height: "100%",
            display: "flex",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <FaSearch onClick={(e) => handleSearch(e)} />
        </div>
      </div>
      <button onClick={() => setFilterData(data)}>All Restuarants</button>
      <button onClick={() => handleTopRatedRestaurants()}>
        Top Rated Restuarants
      </button>

      {filterData?.length !== 0 ? (
        <CardContainer filterData={filterData} />
      ) : (
        <h1>No Restuarant Found!</h1>
      )}
    </div>
  );
};

export default Home;
