import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listNoti: [],
};

const notiReducer = createSlice({
  name: "notiReducer",
  initialState,
  reducers: {
    getNotiByIdReducer: (state, action) => {
      state.listNoti = action.payload;
    },
  },
});

export const { getNotiByIdReducer } = notiReducer.actions;

export default notiReducer.reducer;
