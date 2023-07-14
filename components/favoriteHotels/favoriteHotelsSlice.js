import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteHotels: [],
};

const favoriteHotelsSlice = createSlice({
  name: "favoriteHotels",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteHotels.push({ ...action.payload, favoriteStatus: true });
    },
    delFavorite: (state, action) => {
      state.favoriteHotels = state.favoriteHotels.filter((item) => {
        if (item.hotelId === action.payload.hotelId) return false;
        return item;
      });
    },
  },
});

const { actions, reducer } = favoriteHotelsSlice;

export default reducer;

export const { addFavorite, delFavorite } = actions;
