import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllStudents = createAsyncThunk("allStudents", async () => {
  try {
    const { data } = await axios.get(`/api/students`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const addNewStudent = createAsyncThunk("students/addNewStudent", async (studentObj) => {
  try {
    const { data } = await axios.post(`/api/students`, studentObj);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const removeStudent = createAsyncThunk("removeStudent", async (id) => {
  try {
    const { data } = await axios.delete(`/api/students/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const studentsSlice = createSlice({
  name: "students",
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStudents.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addNewStudent.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(removeStudent.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const selectStudents = (state) => {
  return state.students;
};

export default studentsSlice.reducer;
