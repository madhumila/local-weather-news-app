import React, { useEffect, useState } from "react";
import "./Navabar.css";
import { useDispatch, useSelector } from "react-redux";
import { updateMode, updateNewsLanguage } from "../../Feature/NewsAppSlice";
import languagesData from "../../language.json";

const Navbar = ({ onSearch, setCategory, onModeChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.app.isDarkMode);
  const [selectedLanguage, setSelectedLanguage] = useState("ta");

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  const handleLanguageSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedLanguage(selectedValue);
    dispatch(updateNewsLanguage(selectedValue));
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handler function for toggling dark mode
  const toggleDarkMode = () => {
    dispatch(updateMode(!darkMode));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#8d1612" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            News feed
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  onClick={() => setCategory("general")}
                >
                  General
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setCategory("business")}
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setCategory("sports")}
                >
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setCategory("science")}
                >
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setCategory("health")}
                >
                  Health
                </a>
              </li>
            </ul>
            <div className="dropdown-container">
              <select
                className="dropdown-select"
                value={selectedLanguage || ""}
                onChange={handleLanguageSelect}
              >
                <option value="">Select Language</option>
                {languagesData.languages.map((language) => (
                  <option key={language.iso_code} value={language.iso_code}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
            <form className="d-flex" role="search" onSubmit={handleFormSubmit}>
              <input
                className="form-control"
                type="search"
                placeholder="Type something.."
                aria-label="Search"
                value={searchTerm}
                onChange={handleInputChange}
                style={{
                  width: "180px",
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                  borderTopLeftRadius: "0.25rem",
                  borderBottomLeftRadius: "0.25rem",
                  border: "none",
                }}
              />
              <button
                className="btn-custom-search"
                style={{
                  borderTopLefttRadius: "0",
                  borderBottomLefttRadius: "0",
                }}
                type="submit"
              >
                Search
              </button>
            </form>
            <button
              className="btn btn-outline-light toggle-button"
              onClick={toggleDarkMode}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
