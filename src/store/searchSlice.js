// src/store/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  results: [ {
    "id": "fde6378e-575f-405a-a2bf-7e0b50de57a6",
    "name": "India Gate",
    "address": "Kartavya Path, India Gate, New Delhi, Delhi 110001",
    "description": "India Gate is a war memorial honoring soldiers of the British Indian Army who died in World War I.",
    "perImage": "https://firebasestorage.googleapis.com/v0/b/eduseek-a1137.appspot.com/o/placePerImage%2FindiaGate.jfif?alt=media&token=5f21c523-9dda-4338-b4e4-d3b0623adad2",
    "latitude": 28.6129,
    "longitude": 77.2295,
    "categoryId": "74078440-387b-4597-b75d-86b6a5e2cf41",
    "createdAt": "2024-11-09T15:36:36.210Z",
    "updatedAt": "2024-11-09T15:36:36.210Z",
    "reviews": [],
    "images": [],
    "favorites": [],
    "category": {
      "name": "Monument"
    },}],
  selectedPosition:  {
    "id": "fde6378e-575f-405a-a2bf-7e0b50de57a6",
    "name": "India Gate",
    "address": "Kartavya Path, India Gate, New Delhi, Delhi 110001",
    "description": "India Gate is a war memorial honoring soldiers of the British Indian Army who died in World War I.",
    "perImage": "https://firebasestorage.googleapis.com/v0/b/eduseek-a1137.appspot.com/o/placePerImage%2FindiaGate.jfif?alt=media&token=5f21c523-9dda-4338-b4e4-d3b0623adad2",
    "latitude": 28.6129,
    "longitude": 77.2295,
    "categoryId": "74078440-387b-4597-b75d-86b6a5e2cf41",
    "createdAt": "2024-11-09T15:36:36.210Z",
    "updatedAt": "2024-11-09T15:36:36.210Z",
    "reviews": [],
    "images": [],
    "favorites": [],
    "category": {
      "name": "Monument"
    },}
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults(state, action) {
      state.results = action.payload;
    },
    setSelectedPosition(state, action) {
      state.selectedPosition = action.payload;
    },
  },
});

export const { setSearchResults, setSelectedPosition } = searchSlice.actions;
export default searchSlice.reducer;
