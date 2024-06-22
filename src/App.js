import React, { useState } from "react";
import Navbar from "./Components/News/Navbar";
import NewsHome from "./Components/News/NewsHome";

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

  return (
    <div>
      <Navbar
        onSearch={handleSearch}
        setCategory={handleCategoryChange}
        onModeChange={handleModeChange}
      />
      <NewsHome query={query} category={category} mode={darkMode} />
    </div>
  );
};

export default App;
