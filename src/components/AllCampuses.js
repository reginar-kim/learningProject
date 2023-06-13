import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCampuses,
  removeCampus,
  fetchAllCampuses,
} from "../store/campusesSlice";
import { Link, useNavigate } from "react-router-dom";
import { AddNewCampus } from "./";
import { SingleStudent } from "./";

const AllCampuses = () => {
  const campuses = useSelector(selectCampuses);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="allDisplay">
      <section id="campuses">
        {Array.isArray(campuses) && campuses.length
          ? campuses.map((campus) => (
              <div className="campus" key={campus.id}>
                <Link to={`/campuses/${campus.id}`}>
                  <div>
                    <img src={campus.image} alt="Campus" />
                  <h2>{campus.name}</h2>
                  </div>
                </Link>
                <p>{`Address: ${campus.address}`}</p>
                <p>{`Description: ${campus.description}`}</p>
                 <button
                  onClick={() => {
                    dispatch(removeCampus(campus.id));
                    dispatch(fetchAllCampuses());
                    navigate("/campuses");
                  }}
                >
                  Delete Campus
                </button>
            
              </div>
              
            ))
          : null}
      </section>
      <AddNewCampus />
    </div>
  );
};

export default AllCampuses;
