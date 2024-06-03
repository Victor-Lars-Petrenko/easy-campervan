import { createSlice } from "@reduxjs/toolkit";

import { fetchCampers } from "./campers-operations";

import { pending, rejected } from "../../assets/functions/redux";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const CamperSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, pending)
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchCampers.rejected, rejected);
  },
});

export default CamperSlice.reducer;
