import Header from "./Header";
import icon from "../assets/icon.png";
import CardContainer from "./CardContainer";
import { FaSearch, FaUikit } from "react-icons/fa";
import "./App.css";
import restaurants from "../utils/data";
import React, { useState, useMemo, useEffect } from "react";
import Shimmer from "./Shimmer";
const App = () => {
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
    <div>
      {/* <img src="https://www.google.com/imgres?q=food%20app%20logo&imgurl=https%3A%2F%2Fmarketplace.canva.com%2FEAFaFUz4aKo%2F3%2F0%2F1600w%2Fcanva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg&imgrefurl=https%3A%2F%2Fwww.canva.com%2Ftemplates%2Fs%2Ffood-logo%2F&docid=UFP4zOfACVBHDM&tbnid=eXNVs_9IqH569M&vet=12ahUKEwiSpcTagoqOAxW2d2wGHWW_HRsQM3oECGYQAA..i&w=1600&h=1600&hcb=2&ved=2ahUKEwiSpcTagoqOAxW2d2wGHWW_HRsQM3oECGYQAA" alt="Food App Logo" /> */}
      <Header />
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

        {filterData.length !== 0 ? (
          <CardContainer filterData={filterData} />
        ) : (
          <h1>No Restuarant Found!</h1>
        )}
      </div>
    </div>
  );
};
export default App;
