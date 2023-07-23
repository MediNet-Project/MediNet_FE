import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userSignedIn:{}
}

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginReducer:(state,action) => {
        state.userSignedIn = action.payload
    }
  }
});

export const {loginReducer} = userReducer.actions

export default userReducer.reducer