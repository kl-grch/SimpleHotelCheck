import { configureStore } from "@reduxjs/toolkit";
import searchForm from "../../components/searchForm/searchFormSlice";
import favoriteHotels from "../../components/favoriteHotels/favoriteHotelsSlice";
import foundHotels from "../../components/foundHotels/foundHotelsSlise.js";

export const store = configureStore({
  reducer: { searchForm, favoriteHotels, foundHotels },
});
