import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "",
  password: "",
  authStatus: false,
};

const authFormSlice = createSlice({
  name: "authForm",
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action) => {
      state.authStatus = action.payload;
    },
  },
});

const { actions, reducer } = authFormSlice;

export default reducer;

export const { setAuthorizationStatus } = actions;