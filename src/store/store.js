import { configureStore } from '@reduxjs/toolkit';
import likesReducer from './likes';
import weatherReducer from './weather';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    likes: likesReducer,
  },
});

export default store;
