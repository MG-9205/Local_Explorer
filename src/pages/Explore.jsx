import { useState } from "react";
import MapComponent from "../components/MapComponent.jsx";
import CategoryList from "../components/ExploereComponent/CategoryList.jsx";
import SearchBar from "../components/ExploereComponent/SearchBar.jsx";

const ratingList = [
  {
    id: 1,
    name: 1,
    icon: "⭐",
  },
  {
    id: 2,
    name: 2,
    icon: "⭐⭐",
  },
  {
    id: 3,
    name: 3,
    icon: "⭐⭐⭐",
  },
  {
    id: 4,
    name: 4,
    icon: "⭐⭐⭐⭐",
  },
  {
    id: 5,
    name: 5,
    icon: "⭐⭐⭐⭐⭐",
  },
];

function SelectRating() {
  const [selectedRating, setSelectedRating] = useState([]);

  const onSelectRating = (isChecked, value) => {
    if (isChecked) {
      setSelectedRating([...selectedRating, value]);
    } else {
      setSelectedRating(selectedRating.filter((n) => n !== value));
    }
    console.log(selectedRating);
    onRatingChange(selectedRating);
  };
  return (
    <div className="px-2 mt-5">
      <h2 className="font-bold">Select Rating</h2>
      <div>
        {ratingList.map((item, index) => (
          <div key={index} className="flex justify-between">
            <label>{item.icon}</label>
            <input
              type="checkbox"
              onChange={(e) => onSelectRating(e.target.checked, item.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Explore() {
  const handlePlaceSelect = (coordinates) => {
    // Add marker to the selected place
  };
  const [category, setCategory] = useState();
  return (
    <>
      <div
        className="grid 
    grid-cols-1
    md:grid-cols-4  h-[100vh] w-[100%] bg-white py-2"
      >
        <div className="p-3 z-0">
          <SearchBar onPlaceSelect={handlePlaceSelect} />
          <CategoryList onCategoryChange={(value) => setCategory(value)} />
          <SelectRating />
        </div>
        <div className="col-span-3">
          <MapComponent />
        </div>
      </div>
    </>
  );
}
