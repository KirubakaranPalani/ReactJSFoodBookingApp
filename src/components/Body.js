import React from "react";
import { useState, useEffect } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8503129&lng=77.6716871&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const [searchText, setSearchText] = useState("");

  // conditional rendering
  // if (resList.length === 0) {
  //   return <Shimmer />;
  // }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
            type="text" 
            className="search-box" 
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (data) => data.info.avgRating > 4.5
            );
            setResList(filteredList);
            console.log(resList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resList.map((data) => (
          <RestroCard key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
