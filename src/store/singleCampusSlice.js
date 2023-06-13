import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSingleCampus = createAsyncThunk(
  "singleCampus/fetchSingleCampus",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateSingleCampus = createAsyncThunk(
  "updateSingleCampus",
  async (campusObj) => {
    try {
      const { data } = await axios.put(
        `/api/campuses/${campusObj.id}`,
        campusObj
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const singleCampusSlice = createSlice({
  name: "singleCampus",
  initialState: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCampus.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(updateSingleCampus.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const selectCampus = (state) => {
  return state.singleCampus;
};

export default singleCampusSlice.reducer;

