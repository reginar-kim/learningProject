import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllStudents } from "../store/studentsSlice";
import { fetchAllCampuses } from "../store/campusesSlice";
import {
  Navbar,
  AllStudents,
  AllCampuses,
  SingleStudent,
  SingleCampus,
} from "./";
import { Routes, Route, Link } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStudents());
    dispatch(fetchAllCampuses());
  }, [dispatch]);

  const NotFound = () => {
    return (
      <div>
        <h2> WHY ARE YOU HERE? </h2>
        <p> Click on the STUDENTS or CAMPUSES please </p>
      </div>
    );
  };


  return (
    <main>
      <h1> WELCOME! </h1>

      <h2> (please call my mom. im scared.) </h2>

      <Navbar />
      <div>
      <Link to="/404">MAIN</Link>
      </div>
      <Routes>
        <Route path="/students" element={<AllStudents />} />
        <Route path="/campuses" element={<AllCampuses />} />
        <Route path="/students/:studentId" element={<SingleStudent />} />
        <Route path="/campuses/:campusId" element={<SingleCampus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
