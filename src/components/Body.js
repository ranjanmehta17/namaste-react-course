import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState(resList);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filteredRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top
        </button>
      </div>
      <div className="res-container"></div>
      {filteredRestaurant.map((restaurant, index) => {
        return <RestaurantCard key={restaurant?.info?.id} resData={restaurant?.info} />;
      })}
    </div>
  );
};

export default Body;