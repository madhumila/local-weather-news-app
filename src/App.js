import React, { useEffect, useState } from "react";
import Navbar from "./Components/News/Navbar";
import NewsHome from "./Components/News/NewsHome";
import WeatherWidget from "./Components/Weather/WeatherWidget";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("general");

  // Handler function for search
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };
  // Handler function for category change
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    // Get user's geolocation
    const fetchUserGeolocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting user geolocation:", error);
        }
      );
    };

    fetchUserGeolocation();
  }, []);

  return (
    <div className="app-container">
      <Navbar onSearch={handleSearch} setCategory={handleCategoryChange} />
      <div className="container">
        <div className="main-container" style={{ margin: "auto" }}>
          <div className="news-home">
            <NewsHome query={query} category={category} />
          </div>
          <div className="weather-container">
            <h2 className="text-center">
              <span className="badge bg-danger">Weather</span>
            </h2>
            <WeatherWidget latitude={latitude} longitude={longitude} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
