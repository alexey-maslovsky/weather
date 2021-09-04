import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './comments';
import likesReducer from './likes';
import weatherReducer from './weather';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    likes: likesReducer,
    comments: commentsReducer,
  },
});

export default store;
