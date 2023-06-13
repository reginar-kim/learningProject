import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectStudents,
  removeStudent,
  fetchAllStudents,
} from "../store/studentsSlice";
import { Link, useNavigate } from "react-router-dom";
import { AddNewStudent } from "./";

const AllStudents = () => {
  const students = useSelector(selectStudents);
  console.log(students);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  return (
    <div className="allDisplay">
      <section id="students">
        {Array.isArray(students) && students.length
          ? students.map((student) => (
              <div className="student" key={student.id}>
                <Link to={`/students/${student.id}`}>
                  <div>
                    <img src={student.image} alt="Student" />
                  <h2>{`${student.firstName} ${student.lastName}`}</h2>
                  </div>
                </Link>
                <p>{`Email: ${student.email}`}</p>
                <p>{`GPA: ${student.gpa}`}</p>
                <button
                  onClick={() => {
                    dispatch(removeStudent(student.id));
                    dispatch(fetchAllStudents());
                    navigate("/students");
                  }}
                >
                  Delete Student
                </button>
              </div>
            ))
          : null}
      </section>
      <AddNewStudent />
    </div>
  );
};

export default AllStudents;
