import React, { useState } from "react";
import Navbar from "./Components/News/Navbar";
import NewsHome from "./Components/News/NewsHome";

const App = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };
  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <NewsHome query={query} />
    </div>
  );
};

export default App;
