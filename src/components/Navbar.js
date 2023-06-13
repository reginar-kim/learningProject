import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { selectStudents } from '../store/studentsSlice'
import { selectCampuses } from '../store/campusesSlice'

const Navbar = () => {
  const NumStudents = useSelector(selectStudents).length;
  const NumCampuses = useSelector(selectCampuses).length;

  return (
    <nav id='navbar'>
      <Link to="/students">{`Students (${NumStudents})`}</Link>
      <Link to="/campuses">{`Campuses (${NumCampuses})`}</Link>
    </nav>
  )
}

export default Navbar;