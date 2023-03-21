import React from "react";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon"
import PhoneIcon from "@heroicons/react/24/outline/PhoneIcon"

const PlaceDetails = ({ place }) => {
  return (
    <div className="useBoxShadowplz h-auto shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] my-6">
      <div className="ImageHere">
        <img
          src={
            place.photo
              ? place.photo.images.large.url
              : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
          }
          alt="Image"
          className="h-[250px] w-full"
        />
      </div>
      <div className="restOfContent px-2 pb-2">
        <div className="titleOfPlace">{place.name}</div>
        <div className="moreDetails flex justify-between">
          <div>Price</div>
          <div>{place.price_level}</div>
        </div>
        <div className="moreDetails flex justify-between text-[12px]">
          <div>Ranking</div>
          <div>{place.ranking}</div>
        </div>
          {place?.awards?.map((award) => {
            <div className="flex justify-between items-center my-1">
              <img src={award.images.small} alt={award.display_name} />
              <p className=" text-gray-600">{award.display_name}</p>
            </div>;
          })}
        <div className="flex flex-wrap">
          {place?.cuisine?.map(({ name }) => (
            <div
              key={name}
              label={name}
              className="mr-4 mt-2 text-[12px] bg-gray-600 text-white rounded-full px-2"
            >
              {name}
            </div>
          ))}
        </div>
        {place?.address &&(
          <div className="flex justify-between items-center mt-2">
            <MapPinIcon className="h-[30px] w-[30px] text-gray-700" />
            <div className="text-[12px] text-right">{place.address}</div>
          </div>
        )}
        {place?.phone &&(
          <div className="flex justify-between items-center mt-2">
            <PhoneIcon className="h-5 w-5 text-gray-700" />
            <div className="text-[12px] text-right">{place.phone}</div>
          </div>
        )}
        <div className="linksToWeb flex gap-6 mt-2">
          <button className=" text-sky-800 font-semibold text-[14px]" onClick={()=> window.open(place.web_url, '_blank')}>Trip Advisor</button>
          <button className=" text-sky-800 font-semibold text-[14px]" onClick={()=> window.open(place.website, '_blank')}>Website</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
