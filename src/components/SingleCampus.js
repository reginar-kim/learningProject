import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampuses } from "../store/campusesSlice";
import {
  fetchSingleCampus,
  updateSingleCampus,
  selectCampus,
} from "../store/singleCampusSlice";
import { selectStudents } from "../store/studentsSlice";

const SingleCampus = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { campusId } = useParams();

  const [newName, setName] = useState("");
  const [newAddress, setAddress] = useState("");
  const [newDescription, setDescription] = useState("");
  const [setStudentId, setSetStudentId] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const campus = useSelector(selectCampus);
  const students = useSelector(selectStudents);

  const { id, name, address, description, image, studentId } = campus;

  const campusStudents = students.filter((student) => student.campusId === id);
  const studentNames = campusStudents.map(
    (student) => `${student.firstName} ${student.lastName}`
  );

  const noStudentsMessage = "No students found for this campus.";

  
  useEffect(() => {
    dispatch(fetchSingleCampus(campusId));
    dispatch(fetchAllCampuses());
  }, [dispatch]);

  useEffect(() => {
    setName(name);
    setAddress(address);
    setDescription(description);
    setSetStudentId(studentId);
    setImageUrl(image);
  }, [campus]);

  return (
    <div className="update">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const campusObj = {
            id: campusId,
            name: newName,
            address: newAddress,
            description: newDescription,
            studentId: setStudentId,
            image: imageUrl,
          };
          dispatch(updateSingleCampus(campusObj));
          dispatch(fetchAllCampuses());
          navigate(`/campuses/${campusId}`);
        }}
      >
        <div>
          <h2>{name}</h2>
          <img src={image} alt={name} />
          <p>{address}</p>
          <p>{description}</p>
          <h3>Students</h3>
          {studentNames.length > 0 ? (
            <ul>
              {studentNames.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          ) : (
            <p>{noStudentsMessage}</p>
          )}
        </div>
        <div className="inputRow">
          <p>Name:</p>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={newName || ""}
          ></input>
        </div>
        <div className="inputRow">
          <p>Address:</p>
          <input
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            value={newAddress || ""}
          ></input>
        </div>
        <div className="inputRow">
          <p>Description:</p>
          <textarea
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={newDescription || ""}
          ></textarea>
        </div>
        <div className="inputRow">
          <p>Image:</p>
          <img src={imageUrl} alt="Campus" />
          <input
            onChange={(event) => {
              setImageUrl(event.target.value);
            }}
            value={imageUrl || ""}
          ></input>
        </div>
        <div className="inputRow">
          <p>Students:</p>
          <select
            onChange={(event) => {
              setStudentId(event.target.value);
            }}
            value={setStudentId || ""}
          >
            <option value={null}>None</option>
            {students.map((student) => {
              return (
                <option key={student.id} value={student.id}>
                  {student.firstName} {student.lastName}
                </option>
              );
            })}
          </select>
        </div>
        <br></br>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default SingleCampus;
