import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import CommentsApi from '../services/CommentsApi';

export const getComments = createAsyncThunk('comments/getComments', async (search) => {
  const api = new CommentsApi();

  const result = await api.getComments(search);

  return result;
});

export const addComment = createAsyncThunk('comments/addComment', async (data) => {
  const api = new CommentsApi();

  const addedComment = await api.addComment(data.search, data.comment);

  return addedComment;
});

const initialState = {
  comments: null,
};

const commentsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getComments.fulfilled, (state, action) => {
    state.comments = action.payload;
  });

  builder.addCase(addComment.fulfilled, (state, action) => {
    state.comments.push(action.payload);
  });
});

export default commentsReducer;
