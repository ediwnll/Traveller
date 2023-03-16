import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

import { getPlacesData } from "./api";

function App() {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude, lng:longitude})
    })

  },[])

  useEffect(() => {
    console.log(coordinates,bounds)
    getPlacesData(bounds.sw,bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coordinates,bounds]);

  return (
    <div className="App">
      <Header />
      <div className="flex">
        <div className="w-full h-full">
          <List places={places}/>
        </div>
        <div className="h-full">
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates}/>
        </div>
      </div>
    </div>
  );
}

export default App;
