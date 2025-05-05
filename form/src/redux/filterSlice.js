import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  category: "all",
  priceRange: [0, 1000],
  rating: 0,
  sortby: "default",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setSortby: (state, action) => {
      state.sortby = action.payload;
    },
    resetFilter: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setSearch,
  setCategory,
  setPriceRange,
  setRating,
  setSortby,
  resetFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
