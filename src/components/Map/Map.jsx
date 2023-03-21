import React from "react";
import GoogleMapReact from "google-map-react";
import MapPinIcon from "@heroicons/react/24/outline";
import { useMediaQuery } from "@mui/material/";

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const desktop = useMediaQuery("(min-width:600px)");

  return (
    <div className=" w-full h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDlIE6AwvFDskFKVuTQl9B5Xvf5jJZV2mY" }}
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
        onChildClick={()=>{}}
      >
        {places?.map((place, i) => (
          <div
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!desktop ? (
              <MapPinIcon />
            ) : (
              <div className="p-3 flex flex-col justify-center w-[100px] bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <div className=" text-[12px]">{place.name}</div>
                <img
                  className=" cursor-pointer"
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
              </div>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
