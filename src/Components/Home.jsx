import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import Shimmer from "./Shimmer";
import CardContainer from "./CardContainer";
import useGetRestaurants from "../utils/useGetRestaurants";
const Home = () => {
  const [filterData, setFilterData] = useState([]);
  const [activeBtn, setActiveBtn] = useState("All");

  const [serachValue, setSearchValue] = useState("");
  const data = useGetRestaurants(setFilterData);
  const handleTopRatedRestaurants = () => {
    const topRatedRestaurants = data.filter(
      (restaurant) => restaurant.info.avgRating >= 4.5
    );
    setActiveBtn("Top");

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
      <div className="flex p-3 items-center h-20">
        <div className="flex items-center border border-gray-400">
          <input
            className="w-52 outline-0 p-2"
            type="text"
            placeholder="Search for food items"
            value={serachValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div
            data-testid="search-btn"
            className="border-l-2 border-l-gray-400 h-full p-2 cursor-pointer "
          >
            <FaSearch onClick={(e) => handleSearch(e)} />
          </div>
        </div>
        <button
          className="bg-blue-300  font-bold p-2 rounded-lg ml-3 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={activeBtn === "All"}
          onClick={() => {
            setActiveBtn("All");
            setFilterData(data);
          }}
        >
          All Restuarants
        </button>
        <button
          className="bg-blue-300 font-bold p-2 rounded-lg ml-3 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={activeBtn === "Top"}
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
