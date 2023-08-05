import { createSlice } from "@reduxjs/toolkit";

let signedIn = "";

if (localStorage.getItem("userSignedIn")) {
  signedIn = JSON.parse(localStorage.getItem("userSignedIn"));
}

const initialState = {
  userSignedIn: signedIn,
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
} = userReducer.actions;

export default userReducer.reducer;
