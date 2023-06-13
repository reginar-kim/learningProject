/* Here is where you will configure the store 

*/

import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./studentsSlice";
import campusesSlice from "./campusesSlice";
import singlStudentSlice from "./singleStudentSlice";
import singleCampusSlice from "./singleCampusSlice";

const store = configureStore({
  reducer: {
    students: studentsSlice,
    campuses: campusesSlice,
    singleStudent: singlStudentSlice,
    singleCampus: singleCampusSlice,
  },
});

export default store;
