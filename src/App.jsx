import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { getPlacesData } from "./api";
import { Helmet } from "react-helmet";



function App() {
  const [places, setPlaces] = useState([]);
  const [filterPlaces, setFilterPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [type, setType] = useState('restaurants');
  const [ratings, setRating] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude, lng:longitude})
    })

  },[])

  useEffect(() => {
    const filterData = places.filter((place)=> place.rating>ratings)
    setFilterPlaces(filterData)
    console.log({ratings})
  }, [ratings])
  

  useEffect(() => {
    console.log(coordinates,bounds)
    setIsLoading(true)
    getPlacesData(type, bounds?.sw,bounds?.ne).then((data) => {
      console.log(data);
      setPlaces(data);
      setIsLoading(false)
    });
  }, [type, coordinates,bounds]);

  return (
    <div className="App flex justify-center w-[100vw] h-[100vh] max-w-[100vw] max-h-[100vh] relative">
      <Helmet><script src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${import.meta.env.VITE_GOOGLE_KEY}`}></script></Helmet>
      <Header setType={setType} setRating={setRating} setCoordinates={setCoordinates}/>
      <List isLoading={isLoading} places={filterPlaces.length ? filterPlaces : places}/>
      <Map setCoordinates={setCoordinates} coordinates={coordinates} setBounds={setBounds} places={filterPlaces.length ? filterPlaces : places}/>
    </div>
  );
}

export default App;
