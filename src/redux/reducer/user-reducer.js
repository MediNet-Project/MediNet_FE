import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userSignedIn: {},
  listUser: [],
  userDetail: {},
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      state.userSignedIn = action.payload;
    },
    logoutReducer: (state, action) => {
      state.userSignedIn = "";
      state.listUser = [];
      state.userDetail = {};
    },
    getUserSignedInDetailReducer: (state, action) => {
      state.userSignedIn = action.payload;
    },
    getListUserReducer: (state, action) => {
      state.listUser = action.payload;
    },
    getUserByIdReducer: (state, action) => {
      state.userDetail = action.payload;
    },
  },
});

export const {
  loginReducer,
  logoutReducer,
  getListUserReducer,
  getUserByIdReducer,
  getUserSignedInDetailReducer,
} = userReducer.actions;

export default userReducer.reducer;
