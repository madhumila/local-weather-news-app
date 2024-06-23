import React, { useState, useEffect } from "react";

const WeatherWidget = ({ latitude, longitude, mode }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "f26245c680ec76ce301fc4ccf54ca94c";
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
    backgroundColor: !mode ? "#868B94" : "#fff",
    color: mode ? "#fff" : "#000",
    height: "400px",
    width: "100%",
    marginTop: "15px",
  };

  return (
    <div className="d-flex">
      <div style={{ margin: "auto" }}>
        <div className="card text-body" style={cardStyle}>
          <div className="card-body p-4">
            <div className="d-flex">
              <h6 className="flex-grow-1">{weatherData.name}</h6>
              <h6>
                {new Date(weatherData.dt * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </h6>
            </div>
            <div className="d-flex flex-column text-center mt-5 mb-4">
              <h6 className="display-4 mb-0 font-weight-bold">
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
                  <span className="ms-1">{weatherData.wind.speed} km/h</span>
                </div>
                <div>
                  <i
                    className="fas fa-tint fa-fw"
                    style={{ color: "#868B94" }}
                  ></i>{" "}
                  <span className="ms-1">{weatherData.main.humidity}%</span>
                </div>
                <div>
                  <i
                    className="fas fa-sun fa-fw"
                    style={{ color: "#868B94" }}
                  ></i>{" "}
                  <span className="ms-1">{weatherData.clouds.all}h</span>
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
