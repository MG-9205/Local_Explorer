// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import imageReducer from './imageSlice'

const store = configureStore({
  reducer: {
    search: searchReducer,
    image: imageReducer
  },
});

export default store;
