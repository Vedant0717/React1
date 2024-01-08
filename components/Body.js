import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants,setListOfRestaurants]=useState(resObj);
    return (
      <div className="body">
        <div className="filter">Search
        <button className="filter-btn" onClick={() =>
           {
            const filteredlist= listOfRestaurants.filter(
              (res)=>res.data.avgRating>4);
              setListOfRestaurants(filteredlist);
            }}>
            Top Rated Restaurant
           </button>
        </div>
        <div className="res-container">
              {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key = {restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;