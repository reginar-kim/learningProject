import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleStudent = createAsyncThunk(
  "singleStudent",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/students/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateSingleStudent = createAsyncThunk(
  "updateSingleStudent",
  async (studentObj) => {
    try {
      const { data } = await axios.put(
        `/api/students/${studentObj.id}`,
        studentObj
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const singlStudentSlice = createSlice({
  name: "singleStudent",
  initialState: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleStudent.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(updateSingleStudent.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const selectStudent = (state) => {
  return state.singleStudent;
};

export default singlStudentSlice.reducer;
