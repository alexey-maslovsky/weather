import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import WeatherApi from '../services/WeatherApi';

export const getWeatherData = createAsyncThunk('weather/getData', async (search) => {
  const api = new WeatherApi();
  const result = await api.find(search);

  return result;
});

const initialState = {
  data: undefined,
};

const weatherReducer = createReducer(initialState, (builder) => {
  builder.addCase(getWeatherData.pending, (state) => {
    state.data = undefined;
  });

  builder.addCase(getWeatherData.fulfilled, (state, action) => {
    state.data = action.payload;
  });
});

export default weatherReducer;
