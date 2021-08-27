import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '.';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;
