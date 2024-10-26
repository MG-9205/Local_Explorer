import React, { useState } from 'react';

function SearchBar({ onPlaceSelect }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (searchText) => {
    const response = await fetch(
      `https://api.maptiler.com/geocoding/${searchText}.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
    );
    const data = await response.json();
    setSuggestions(data.features);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 2) {
      fetchSuggestions(value); // Fetch suggestions if input length > 2
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search places..."
        value={query}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <ul>
        {suggestions.map((place) => (
          <li
            key={place.id}
            onClick={() => onPlaceSelect(place.geometry.coordinates)}
            style={{ cursor: 'pointer', padding: '5px', backgroundColor: '#f0f0f0', margin: '2px 0' }}
          >
            {place.place_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
