import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import CommentsApi from '../services/CommentsApi';

export const getComments = createAsyncThunk('comments/getComments', async (search) => {
  const api = new CommentsApi();

  const result = await api.getComments(search);

  return result;
});

export const addComment = createAsyncThunk('comments/addComment', async (comment) => {
  const api = new CommentsApi();

  await api.addComment(comment);
});

const initialState = {
  comments: null,
};

const commentsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getComments.fulfilled, (state, action) => {
    state.comments = action.payload;
  });

  builder.addCase(addComment.pending, (state, action) => {
    state.comments.push(action.meta.arg);
  });
});

export default commentsReducer;
