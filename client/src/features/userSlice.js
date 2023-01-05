import { createSlice } from "@reduxjs/toolkit";
// import * as toolkitRaw from '@reduxjs/toolkit';
import appApi from "../services/appApi";
// const { createSlice } = toolkitRaw.default ?? toolkitRaw;

// const { createSlice } = toolkitRaw.default

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addNotifications: (state, { payload }) => {},
    resetNotifications: (state, { payload }) => {},
},

    extraReducers: (builder) => {
      //save user after signup
      builder.addMatcher(
        appApi.endpoints.signupUser.matchFulfilled,
        (state, { payload }) => payload
      );
      // save use after login
      builder.addMatcher(
        appApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => payload
      );
      // logout user
      builder.addMatcher(
        appApi.endpoints.logoutUser.matchFulfilled,
        () => null
      );
    },
  },

);

export const { addNotifications, resetNotifications } = userSlice.actions;
export default userSlice.reducer;
