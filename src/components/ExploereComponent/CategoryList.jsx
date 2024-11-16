import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchResults } from '../../store/searchSlice';

import Cafe from '../../assets/image/CafeIcon.png';
import Monument from '../../assets/image/TajmahalIcon.png';
import Station from '../../assets/image/StationIcon.png';
import Restaurant from '../../assets/image/RestaurantIcon.png';
import Institutions from '../../assets/image/InstitutionsIcon.png';
import Hotel from '../../assets/image/HotelIcon.png';

const CategoryListData = [
  { id: 1, name: 'Institutions', value: 'Institutions', icon: Institutions },
  { id: 2, name: 'Cafe', value: 'Cafe', icon: Cafe },
  { id: 3, name: 'Restaurant', value: 'Restaurant', icon: Restaurant },
  { id: 4, name: 'Monument', value: 'Monument', icon: Monument },
  { id: 5, name: 'Station', value: 'Station', icon: Station },
  { id: 6, name: 'Hotel', value: 'Hotel', icon: Hotel },
];

function CategoryList() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/places/places/Category/${category}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
          'API-Key':`${import.meta.env.VITE_VALID_API_KEYS}`
         }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch places');
      }
      const data = await response.json();
      dispatch(setSearchResults(data)); 
    } catch (error) {
      console.error('Error fetching places by category:', error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {CategoryListData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center bg-white p-3 m-2 rounded-lg grayscale hover:grayscale-0 cursor-pointer text-[13px] border-purple-400 ${
              selectedCategory === item.value ? 'grayscale-0 border-[1px]' : ''
            }`}
            onClick={() => handleCategoryClick(item.value)}
          >
            <img src={item.icon} alt={item.name} width={40} height={40} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
