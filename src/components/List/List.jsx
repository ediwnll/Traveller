import React, { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = () => {
  const [type, setType] = useState("restaurant");
  const [rating, setRating] = useState("");

  const places = [
    { name: "best hotel" },
    { name: "best food" },
    { name: "best hotesdadl" },
    { name: "best dog" },
    { name: "best hotel" },
    { name: "best food" },
    { name: "best hotesdadl" },
    { name: "best dog" },
    { name: "best hotel" },
    { name: "best food" },
    { name: "best hotesdadl" },
    { name: "best dog" },
    { name: "best hotel" },
    { name: "best food" },
    { name: "best hotesdadl" },
    { name: "best dog" },
  ];

  return (
    <div className="container">
      <div className="typography my-4 text-3xl">
        Restaurant, Hotels & Attraction around
      </div>
      <div className="flex justify-around">
        <form className="flex gap-4">
          <label>Type:</label>
          <select
            name="choices"
            id="choices"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="restaurant">Restaurants</option>
            <option value="hotel">Hotels</option>
            <option value="attraction">Attraction</option>
          </select>
        </form>
        <form className="flex gap-4">
          <label>Rating:</label>
          <select
            name="choices"
            id="choices"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value={0}>All</option>
            <option value={3}>Above 3</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </form>
      </div>
      <div className="containerList h-[75vh] overflow-auto">
        {places?.map((place, i)=>(
          <div item key={i} className='p-8'>
            <PlaceDetails place={place}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
