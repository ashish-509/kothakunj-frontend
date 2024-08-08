import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "../lib/ThemeContext";

const SearchForm = ({ onSearch }) => {
  const { theme } = useTheme();
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [type, setType] = useState("");
  const [rooms, setRooms] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ location, priceRange, type, rooms });
  };

  return (
    <div className="w-full h-1/2 p-2">
      <form
        className={`bg-${
          theme === "dark" ? "gray-700 text-white" : "white text-gray-900"
        } p-6 rounded-lg shadow-lg w-full h-full mx-auto max-w-2xl`}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Find Your Perfect Rental Space
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter your preferred location"
            className={`border border-gray-300 p-4 rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none ${
              theme === "dark" ? "text-white bg-gray-600" : ""
            }`}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select
            className={`border border-gray-300 p-4 rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none ${
              theme === "dark" ? "text-white bg-gray-600" : ""
            }`}
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Price Range</option>
            <option value="0-10000">Below 10000</option>
            <option value="10000-20000">10000-20000</option>
            <option value="20000-30000">20000-30000</option>
            <option value="30000-">Above 30000</option>
          </select>
          <select
            className={`border border-gray-300 p-4 rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none ${
              theme === "dark" ? "text-white bg-gray-600" : ""
            }`}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Res/Office</option>
            <option value="Residence">Residence</option>
            <option value="Office">Office</option>
            <option value="Others">Others</option>
          </select>
          <select
            className={`border border-gray-300 p-4 rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none ${
              theme === "dark" ? "text-white bg-gray-600" : ""
            }`}
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          >
            <option value="">-Room BHK-</option>
            <option value="1 Room">1 Room</option>
            <option value="2 Rooms">2 Rooms</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="3+ BHK">3+ BHK</option>
          </select>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className={`w-40 px-3 py-3 ${
              theme === "dark"
                ? "bg-gray-600 hover:bg-gray-700"
                : "bg-orange-500 hover:bg-orange-900"
            } text-white rounded`}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
