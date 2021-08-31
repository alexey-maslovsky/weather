import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import LikesApi from '../services/LikesApi';

export const getLikes = createAsyncThunk('likes/getLikes', async (search) => {
  const api = new LikesApi();
  const result = await api.getLikes(search);

  return result;
});

export const like = createAsyncThunk('likes/like', async (search) => {
  const api = new LikesApi();
  await api.like(search);
});

export const dislike = createAsyncThunk('likes/dislike', async (search) => {
  const api = new LikesApi();
  await api.dislike(search);
});

const initialState = {
  count: null,
};

const likesReducer = createReducer(initialState, (builder) => {
  builder.addCase(getLikes.fulfilled, (state, action) => {
    state.count = action.payload;
  });

  builder.addCase(like.pending, (state) => {
    state.count = state.count + 1;
  });
});

export default likesReducer;
