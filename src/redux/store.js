import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user-reducer";
import postReducer from "./reducer/post-reducer";
import followReducer from "./reducer/follow-reducer";
export const store = configureStore({
  reducer: {
    userReducer,
    postReducer,
    followReducer,
  },
});
