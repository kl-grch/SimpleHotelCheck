import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterFavoriteRate: false,
  filterFavoritePrice: false,
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
    sortFavoriteRate: (state) => {
      state.filterFavoriteRate = true;
      state.filterFavoritePrice = false;
      state.favoriteHotels = state.favoriteHotels.sort(function (a, b) {
        if (a.stars < b.stars) {
          return 1;
        }
        if (a.stars > b.stars) {
          return -1;
        }
        return 0;
      });
    },
    sortFavoriteRateDown: (state) => {
      state.filterFavoriteRate = true;
      state.filterFavoritePrice = false;
      state.favoriteHotels = state.favoriteHotels.sort(function (a, b) {
        if (a.stars < b.stars) {
          return -1;
        }
        if (a.stars > b.stars) {
          return 1;
        }
        return 0;
      });
    },

    sortFavoritePrice: (state) => {
      state.filterFavoritePrice = true;
      state.filterFavoriteRate = false;
      state.favoriteHotels = state.favoriteHotels.sort(function (a, b) {
        if (a.priceFrom > b.priceFrom) {
          return 1;
        }
        if (a.priceFrom < b.priceFrom) {
          return -1;
        }
        return 0;
      });
    },

    sortFavoritePriceDown: (state) => {
      state.filterFavoritePrice = true;
      state.filterFavoriteRate = false;
      state.favoriteHotels = state.favoriteHotels.sort(function (a, b) {
        if (a.priceFrom > b.priceFrom) {
          return -1;
        }
        if (a.priceFrom < b.priceFrom) {
          return 1;
        }
        return 0;
      });
    },

    setFilterFavoriteStatusRate: (state, action) => {
      state.filterFavoriteRate = action.payload;
    },
    setFilterFavoriteStatusPrice: (state, action) => {
      state.filterFavoritePrice = action.payload;
    },
  },
});

const { actions, reducer } = favoriteHotelsSlice;

export default reducer;

export const {
  addFavorite,
  delFavorite,
  sortFavoriteRate,
  sortFavoriteRateDown,
  sortFavoritePrice,
  sortFavoritePriceDown,
  setFilterFavoriteStatusRate,
  setFilterFavoriteStatusPrice,
} = actions;
