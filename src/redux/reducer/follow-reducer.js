import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listFollow: [],
};

const followReducer = createSlice({
  name: "followReducer",
  initialState,
  reducers: {
    getListFollowReducer: (state, action) => {
      state.listFollow = action.payload;
    },
  },
});

export const { getListFollowReducer } = followReducer.actions;

export default followReducer.reducer;
