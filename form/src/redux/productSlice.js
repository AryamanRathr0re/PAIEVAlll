import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

const initailFilter = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchProd = createAsyncThunk("products/fetchProd", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});

const prodSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProd.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProd.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(fetchProd.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default prodSlice.reducer;
