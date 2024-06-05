import { createAsyncThunk } from "@reduxjs/toolkit";
import * as campersApi from "../../api/campers-api";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await campersApi.getCampersRequest();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
