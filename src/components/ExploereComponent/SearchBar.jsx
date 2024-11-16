import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchResults } from '../../store/searchSlice';

// Debounce function to limit the frequency of API calls
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // Clear timeout on cleanup
    };
  }, [value, delay]);

  return debouncedValue;
};

function SearchBar({ onPlaceSelect }) {
  const [query, setQuery] = useState('');
  const [showSuggestion, setShowSuggestion] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const dispatch=useDispatch();
  
  // Use debouncing to delay the API call
  const debouncedQuery = useDebounce(query, 500); // 500ms delay

  const fetchSuggestions = async (searchText) => {
    if (searchText.length > 2) { 
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/places/placeName/${searchText}`,{
          method: 'GET',
          headers: { 'Content-Type': 'application/json',
            'API-Key':`${import.meta.env.VITE_VALID_API_KEYS}`
           }});
        const data = await response.json();
        
        setSuggestions(data);

      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    } else {
      setSuggestions([]); 
    }
  };

  useEffect(() => {
    if (debouncedQuery) { 
      fetchSuggestions(debouncedQuery); 
    } else {
      setSuggestions([]); 
    }
  }, [debouncedQuery]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowSuggestion(true)
   
  };
  const handlePlaceSelect = (place) => {
   
    dispatch(setSearchResults([place])); 
    setQuery(place.name);  
    onPlaceSelect(place);
    setShowSuggestion(false)
    setSuggestions([]);  
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
      {suggestions.length > 0 && (
        <ul>
          {showSuggestion && suggestions.map((place) => (
            <li
              key={place.id}
              onClick={() => handlePlaceSelect(place)}
              className="cursor-pointer p-1.5 bg-gray-100 text-black mb-0.5"
            >
              {place.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
