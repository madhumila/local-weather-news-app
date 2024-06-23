import React, { useEffect, useState } from "react";
import Navbar from "./Components/News/Navbar";
import NewsHome from "./Components/News/NewsHome";
import WeatherWidget from "./Components/Weather/WeatherWidget";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("general");
  const [darkMode, setDarkMode] = useState(false);

  // Handler function for search
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };
  // Handler function for category change
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  // Handler function for dark mode change
  const handleModeChange = (mode) => {
    setDarkMode(mode);
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
      <Navbar
        onSearch={handleSearch}
        setCategory={handleCategoryChange}
        onModeChange={handleModeChange}
      />
      <div className="container">
        <div
          className="main-container"
          style={{ marginLeft: "-80px", marginRight: "-80px" }}
        >
          <NewsHome query={query} category={category} mode={darkMode} />
          <div className="weather-container">
            <h2 className="text-center">
              <span className="badge bg-danger">Weather</span>
            </h2>
            <WeatherWidget
              latitude={latitude}
              longitude={longitude}
              mode={darkMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
