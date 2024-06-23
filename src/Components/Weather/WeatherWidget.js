import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./WeatherWidget.css";

const WeatherWidget = ({ latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const darkMode = useSelector((state) => state.mode.isDarkMode);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
        );
        const weatherData = await weatherResponse.json();
        setWeatherData(weatherData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (latitude && longitude) {
      fetchWeatherData();
    }
  }, [latitude, longitude]);

  if (loading) {
    return <div>Loading weather...</div>;
  }
  const cardStyle = {
    borderRadius: "35px",
    backgroundColor: darkMode ? "#403c3a" : "#fff",
    color: darkMode ? "#fff" : "#000",
    height: "300px",
    width: "100%",
    marginTop: "15px",
    boxShadow: darkMode
      ? "0 4px 8px rgba(0, 0, 0, 0.3)" // Darker shadow for dark background
      : "0 4px 8px rgba(0, 0, 0, 0.1)", // Lighter shadow for light background
  };

  const headingStyle = {
    color: darkMode ? "#fff" : "#000",
  };
  return (
    <div className="d-flex">
      <div style={{ margin: "auto" }}>
        <div className="card text-body" style={cardStyle}>
          <div className="card-body p-4">
            <div className="d-flex">
              <h6 className="flex-grow-1" style={headingStyle}>
                {weatherData.name}
              </h6>
              <h6 style={headingStyle}>
                {new Date(weatherData.dt * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </h6>
            </div>
            <div className="d-flex flex-column text-center mt-5 mb-4">
              <h6
                className="display-4 mb-0 font-weight-bold  temperature-animation"
                style={headingStyle}
              >
                {weatherData.main.temp}°C
              </h6>
              <span className="small" style={{ color: "#868B94" }}>
                {weatherData.weather[0].description}
              </span>
            </div>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                <div>
                  <i
                    className="fas fa-wind fa-fw"
                    style={{ color: "#868B94" }}
                  ></i>{" "}
                  <span className="ms-1" style={headingStyle}>
                    {weatherData.wind.speed} km/h
                  </span>
                </div>
                <div>
                  <i
                    className="fas fa-tint fa-fw"
                    style={{ color: "#868B94" }}
                  ></i>{" "}
                  <span className="ms-1" style={headingStyle}>
                    {weatherData.main.humidity}%
                  </span>
                </div>
                <div>
                  <i
                    className="fas fa-sun fa-fw"
                    style={{ color: "#868B94" }}
                  ></i>{" "}
                  <span className="ms-1" style={headingStyle}>
                    {weatherData.clouds.all}h
                  </span>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherWidget;
