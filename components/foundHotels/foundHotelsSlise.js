import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foundHotels: [],
};

const foundHotelsSlice = createSlice({
  name: "foundeHotels",
  initialState,
  reducers: {
    getAllHotels: (state, action) => {
      state.foundHotels = action.payload;
    },
  },
});

const { actions, reducer } = foundHotelsSlice;

export default reducer;

export const { getAllHotels } = actions;
