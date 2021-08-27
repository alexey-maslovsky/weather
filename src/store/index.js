import { createAction, createReducer } from '@reduxjs/toolkit';

export const setWeatherData = createAction('weather/setData', (data) => {
  return {
    payload: data,
  };
});

const initialState = {
  data: null,
};

const weatherReducer = createReducer(initialState, (builder) => {
  builder.addCase(setWeatherData, (state, action) => {
    state.data = action.payload;
  });
});

export default weatherReducer;
