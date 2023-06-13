
import React, { useState } from "react";
import { selectCampuses } from "../store/campusesSlice";
import { addNewStudent, fetchAllStudents } from "../store/studentsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddNewStudent = () => {
  const campuses = useSelector(selectCampuses);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [campusId, setCampusId] = useState(""); 
  const [image, setImage] = useState("https://i.pinimg.com/originals/c8/cf/8f/c8cf8f604735ce62812c8482f7b99523.jpg"); 
  const [gpa, setGpa] = useState(0.0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "" || email === "" || gpa === "" || campusId === "") {
      setError("Please fill in all required fields");
    } else {
      dispatch(addNewStudent({ firstName, lastName, email, gpa, campusId}));
      setFirstName("");
      setLastName("");
      setEmail("");
      setGpa("");
      setCampusId("");
      setError("");

      dispatch(fetchAllStudents());
    }
  };

  
  return (
    <div>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gpa">GPA:</label>
          <input
            type="number"
            id="gpa"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="campus">Campus:</label>
          <select
            id="campus"
            value={campusId}
            onChange={(e) => setCampusId(e.target.value)}
          >
            <option value="">--Please choose a campus--</option>
            {campuses.map((campus) => (
              <option key={campus.id} value={campus.id}>
                {campus.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Student</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default AddNewStudent;



