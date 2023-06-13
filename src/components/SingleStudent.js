import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudents } from "../store/studentsSlice";
import {
  fetchSingleStudent,
  updateSingleStudent,
  selectStudent,
} from "../store/singleStudentSlice";
import { selectCampuses } from "../store/campusesSlice";


const singleStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { studentId } = useParams();

  const [newFirstName, setFirstName] = useState("");
  const [newLastName, setLastName] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newCampusId, setCampusId] = useState("");
  const [newImage, setImage] = useState(""); 
  const [newGpa, setGpa] = useState(0.0);

  const campuses = useSelector(selectCampuses);
  const student = useSelector(selectStudent);
  const { firstName, lastName, email, campusId, image, gpa } = student;

  useEffect(() => {
    dispatch(fetchSingleStudent(studentId));
    dispatch(fetchAllStudents());
  }, [dispatch]);

  useEffect(() => {
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setCampusId(campusId);
    setImage(image);
    setGpa(gpa);
  }, [student]);

  return (
    <form
      className="update"
      onSubmit={(event) => {
        event.preventDefault();
        const studentObj = {
          id: studentId,
          firstName: newFirstName,
          lastName: newLastName,
          email: newEmail,
          campusId: newCampusId,
          image: newImage,
          gpa: newGpa,
        };
        dispatch(updateSingleStudent(studentObj));
        dispatch(fetchSingleStudent(studentId));
        dispatch(fetchAllStudents());
        navigate(`/students/${studentId}`);
      }}
    >
      <div className="inputRow">
        <p>First Name:</p>
        <input
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
          value={newFirstName || ""}
        ></input>
      </div>
      <div className="inputRow">
        <p>Last Name:</p>
        <input
          onChange={(event) => {
            setLastName(event.target.value);
          }}
          value={newLastName || ""}
        ></input>
      </div>
      <div className="inputRow">
        <p>Email:</p>
        <input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={newEmail || ""}
        ></input>
      </div>
      <div className="inputRow">
        <p>Campus:</p>
        <select
          onChange={(event) => {
            setCampusId(event.target.value);
            console.log(campusId);
          }}
          value={newCampusId || ""}
        >
          <option value={""} key={Number(0)}>
            None
          </option>
          {campuses && campuses.length
            ? campuses.map((campus) => (
                <option value={campus.id} key={campus.id}>
                  {campus.name}
                </option>
              ))
            : null}
        </select>
      </div>
      <div className="inputRow"> 
        <p>Image:</p>
        <img src={newImage} alt="student" height={100} width={100} />
        <input
          onChange={(event) => {
            setImage(event.target.value);
          }}
          value={newImage || ""}
        ></input>
      </div>
      <div className="inputRow">
        <p>GPA:</p>
        <input
          onChange={(event) => {
            setGpa(event.target.value);
          }}
          value={newGpa || ""}
        ></input>
      </div>
      <br></br>
      <button type="submit">Update</button>
    </form>
  );
};

export default singleStudent;
