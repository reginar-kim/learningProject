import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllCampuses, newCampus } from "../store/campusesSlice";


const AddNewCampus = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("https://p.kindpng.com/picc/s/780-7803368_coming-soon-sign-coming-soon-hd-png-download.png"); 


  return (
    <form
      className="addNew"
      onSubmit={(event) => {
        event.preventDefault();
        const campusObj = {
          name,
          address,
          description,
          image, 
        };
        dispatch(newCampus(campusObj));
        dispatch(fetchAllCampuses());
        navigate("/campuses");
      }}
    >
      <div className="inputRow">
        <p>Name:</p>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        ></input>
      </div>
      <div className="inputRow">
        <p>Address:</p>
        <input
          onChange={(event) => {
            setAddress(event.target.value);
          }}
          value={address}
        ></input>
      </div>
      <div className="inputRow">
        <p>Description:</p>
        <textarea
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          value={description}
        ></textarea>
      </div>
        <div className="inputRow"> 
        <p>Image:</p>
        <input
            onChange={(event) => {
            setImage(event.target.value);
            }}
            value={image}
        ></input>   
        </div> 
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddNewCampus;
