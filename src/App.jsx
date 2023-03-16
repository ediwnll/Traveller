import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex justify-between">
        <div>
          <List />
        </div>
        <div>
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
