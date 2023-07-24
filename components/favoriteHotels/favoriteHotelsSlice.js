import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterFavoriteRate: false,
  filterFavoriteRateDown: false,
  filterFavoritePrice: false,
  filterFavoritePriceDown: false,
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
      state.filterFavoriteRateDown = false;
      state.filterFavoritePrice = false;
      state.filterFavoritePriceDown = false;
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
      state.filterFavoriteRate = false;
      state.filterFavoriteRateDown = true;
      state.filterFavoritePrice = false;
      state.filterFavoritePriceDown = false;
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
      state.filterFavoriteRate = false;
      state.filterFavoriteRateDown = false;
      state.filterFavoritePrice = true;
      state.filterFavoritePriceDown = false;
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
      state.filterFavoriteRate = false;
      state.filterFavoriteRateDown = false;
      state.filterFavoritePrice = false;
      state.filterFavoritePriceDown = true;
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
    clearFavoriteFilters: (state) => {
      state.filterFavoriteRate = false;
      state.filterFavoriteRateDown = false;
      state.filterFavoritePrice = false;
      state.filterFavoritePriceDown = false;
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
  clearFavoriteFilters,
} = actions;
