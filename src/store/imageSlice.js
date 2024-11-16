
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Place:null,
    category:"All"
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setPlace(state, action) {
      state.Place = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const {setPlace,setCategory } = imageSlice.actions;
export default imageSlice.reducer;
