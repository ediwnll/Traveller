import React from "react";
import GoogleMapReact from "google-map-react";
import MapPinIcon from "@heroicons/react/24/outline";
import { useMediaQuery } from "@mui/material/";
import { IoLocation } from "react-icons/io5";
import {BiX} from "react-icons/bi"
import { useState } from "react";



const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const desktop = useMediaQuery("(min-width:600px)");
  const [isCard, setIsCard] = useState(false)
  const [cardData, setCardData] = useState(null)

  return (
    <div className=" w-full h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_KEY}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child)=>{
          setCardData(places[child])
          setIsCard(true)
        }}
      >
        {places?.map((place, i) => (
          <div
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
            className='cursor-pointer relative'
          >
            <IoLocation className=" text-red-600 text-[30px]"/>
          </div>
        ))}
        {isCard && (
          <div className="w-[200px] h-auto bg-white absolute top-[-12] left-0 shadow-lg rounded-lg">
            <img className=" object-cover w-full h-32 rounded-md" src={cardData.photo ? cardData?.photo?.images?.large?.url : 'https://baconmockup.com/640/360'} alt="" />
            <p className=" capitalize w-full text-sm">{cardData.name}</p>
            <div className=" cursor-pointer absolute top-2 right-2 w-7 h-7 bg-red-500 rounded-full flex justify-center items-center" onClick={()=>{setIsCard(false)}}>
              <BiX className=" text-xl"/>
            </div>
          </div>
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
