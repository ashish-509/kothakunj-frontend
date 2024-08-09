import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import { useTheme } from "../lib/ThemeContext";

const SearchPage = () => {
  const { theme } = useTheme();
  const [results, setResults] = useState([]);

  const handleSearch = async (criteria) => {
    try {
      const response = await axios.get("https://kothakunj-backend-1.onrender.com/api/v1/search", {
        params: criteria,
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div
      className={`bg-${
        theme === "dark" ? "gray-700 text-white" : "white text-gray-900"
      } min-h-screen flex flex-col items-center`}
    >
      <SearchForm onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
};

export default SearchPage;
