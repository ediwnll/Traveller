import React, { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, isLoading }) => {
  if (isLoading)
    return (
      <div className="flex flex-col bg-slate-100 w-[37vw] h-[100vh] absolute left-0 top-0 z-[1] overflow-hidden px-2">
        <div className="animate-pulse mt-16 p-6 shadow-lg">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
        <div className=" animate-pulse mt-16 p-6 shadow-lg">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
        <div className="animate-pulse mt-16 p-6 shadow-lg">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
        <div className="animate-pulse mt-16 p-6 shadow-lg">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
        <div className="animate-pulse mt-16 p-6 shadow-lg">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
        
      </div>
    );
  return(
    <div className="flex flex-col bg-slate-100 w-[37vw] h-[100vh] absolute left-0 top-0 z-[1] overflow-hidden px-2">
      <div className="flex flex-1 overflow-y-scroll mt-16 flex-col">
        {
          places && places.map((place, i)=> <PlaceDetails place={place} key={i}/>)
        }
      </div>
    </div>
  )

  // const [type, setType] = useState('restaurant');
  // const [rating, setRating] = useState('');

  // return (
  //   <div className="container">
  //     <div className="typography my-4 text-3xl">
  //       Restaurant, Hotels & Attraction around
  //     </div>
  //     <div className="flex justify-around">
  //       <form className="flex gap-4">
  //         <label>Type:</label>
  //         <select
  //           name="choices"
  //           id="choices"
  //           value={type}
  //           onChange={(e) => setType(e.target.value)}
  //         >
  //           <option value="restaurant">Restaurants</option>
  //           <option value="hotel">Hotels</option>
  //           <option value="attraction">Attraction</option>
  //         </select>
  //       </form>
  //       <form className="flex gap-4">
  //         <label>Rating:</label>
  //         <select
  //           name="choices"
  //           id="choices"
  //           value={rating}
  //           onChange={(e) => setRating(e.target.value)}
  //         >
  //           <option value={0}>All</option>
  //           <option value={3}>Above 3</option>
  //           <option value={4}>Above 4.0</option>
  //           <option value={4.5}>Above 4.5</option>
  //         </select>
  //       </form>
  //     </div>
  //     <div className="containerList h-[83vh] overflow-auto flex flex-col items-center">
  //       {places?.map((place, i)=>(
  //         <div item key={i} className="w-4/5">
  //           <PlaceDetails place={place}/>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default List;
