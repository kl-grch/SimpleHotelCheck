import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  location: "Москва",
  checkIn: dayjs().format("YYYY-MM-DD"),
  checkOut: dayjs().add(1, "day").format("YYYY-MM-DD"),
  countDays: 1,
};

const searchFormSlice = createSlice({
  name: "searchForm",
  initialState,
  reducers: {
    setSearchForm: (state, action) => {
      state.location = action.payload.location;
      state.checkIn = action.payload.checkIn;
      state.countDays = action.payload.countDays;
      state.checkOut = dayjs(action.payload.checkIn)
        .add(action.payload.countDays, "day")
        .format("YYYY-MM-DD");
    },
  },
});

const { actions, reducer } = searchFormSlice;

export default reducer;

export const { setSearchForm } = actions;
