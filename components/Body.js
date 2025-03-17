import React from "react";
import { useState } from "react";
import RestroCard from "./RestroCard";
import resList from "../utils/mockData";

const Body = () => {
  
  const [resList1, setResList1] = useState(resList)

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=> {
          const filteredList = resList1.filter(data => (data.info.avgRating > 4.5));
          setResList1(filteredList)
          console.log(resList1)
        }}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {
          resList1.map(data=> (
            <RestroCard key ={data.info.id} resData={data} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
