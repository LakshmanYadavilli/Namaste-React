import React, { useState, useEffect, use } from "react";

import { FaSearch } from "react-icons/fa";
import Shimmer from "./Shimmer";
import CardContainer from "./CardContainer";
import useGetRestaurants from "../utils/useGetRestaurants";
const Home = () => {
  const [filterData, setFilterData] = useState([]);

  const [serachValue, setSearchValue] = useState("");
  const data = useGetRestaurants(setFilterData);
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
      <div className="flex p-3 items-center">
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
        <button
          className="bg-blue-300 font-bold p-2 rounded-lg ml-3 cursor-pointer"
          onClick={() => setFilterData(data)}
        >
          All Restuarants
        </button>
        <button
          className="bg-blue-300 font-bold p-2 rounded-lg ml-3 cursor-pointer"
          onClick={() => handleTopRatedRestaurants()}
        >
          Top Rated Restuarants
        </button>
      </div>

      {filterData?.length !== 0 ? (
        <CardContainer filterData={filterData} />
      ) : (
        <h1>No Restuarant Found!</h1>
      )}
    </div>
  );
};

export default Home;
