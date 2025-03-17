import React from "react";
import { CDN_URL } from "../utils/constant";

const RestroCard = (props) => {
  const {resData} = props;
  const { cloudinaryImageId, name, cuisines, locality, avgRating} = resData?.info
  console.log(resData);
    // const {resName, cuisine, location="default location", rating=4} = props;
  return (
    <div className="res-card" 
    // style={{ backgroundColor: "#f0f0f0" }}
    style={styleCard}
    >
      <img
        className="res-logo"
        alt="img not found"
        src={CDN_URL+cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h4><b>Cuisines: </b>{cuisines} </h4>
      <h4><b>Location: </b>{locality}</h4>
      <h4><b>Rating: </b>{avgRating} </h4>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0"
}

export default RestroCard;