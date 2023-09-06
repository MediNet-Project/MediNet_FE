import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listPost: [],
  postDetail: {},
};

const postReducer = createSlice({
  name: "postReducer",
  initialState,
  reducers: {
    getListPostReducer: (state, action) => {
      state.listPost = action.payload;
    },
    getPostByIdReducer: (state, action) => {
      state.postDetail = action.payload;
    },
  },
});

export const { getListPostReducer, getPostByIdReducer } = postReducer.actions;

export default postReducer.reducer;
