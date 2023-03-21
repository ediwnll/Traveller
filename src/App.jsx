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
  const [type, setType] = useState('restaurant');
  const [rating, setRating] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude, lng:longitude})
    })

  },[])

  useEffect(() => {
    console.log(coordinates,bounds)
    setIsLoading(true)
    getPlacesData(bounds?.sw,bounds?.ne).then((data) => {
      console.log(data);
      setPlaces(data);
      setIsLoading(false)
    });
  }, [coordinates,bounds]);

  return (
    <div className="App flex justify-center w-[100vw] h-[100vh] max-w-[100vw] max-h-[100vh] relative">
      <Header setType={setType} setRating={setRating} setCoordinates={setCoordinates}/>
      <List isLoading={isLoading} places={places}/>
      <Map setCoordinates={setCoordinates} coordinates={coordinates} setBounds={setBounds}/>
    </div>
  );
}

export default App;
