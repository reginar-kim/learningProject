import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCampuses = createAsyncThunk("allCampuses", async () => {
  try {
    const { data } = await axios.get(`/api/campuses`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const newCampus = createAsyncThunk("newCampus", async (campusObj) => {
  try {
    const { data } = await axios.post(`/api/campuses`, campusObj);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const removeCampus = createAsyncThunk("removeCampus", async (id) => {
  try {
    const { data } = await axios.delete(`/api/campuses/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const campusesSlice = createSlice({
  name: "campuses",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampuses.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchAllCampuses.rejected, (state, action) => {
        console.log(acton.error);
      })
      .addCase(newCampus.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(removeCampus.fulfilled, (state, action) => {
        return state.filter((campus) => campus.id !== action.payload.id);
      });
  },
});

export const selectCampuses = (state) => {
  return state.campuses;
};

export default campusesSlice.reducer;
