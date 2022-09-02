import React, { useEffect } from 'react'
import Sidebar from './Dashboard/Sidebar'
import Header from './Dashboard/Header'
import Badge from './Dashboard/Badge'
import InPatient from './Dashboard/InPatient'
import InDoctor from './Dashboard/InDoctor'
import DoctorSidebar from './Dashboard/DoctorSidebar'
import './Dashboard/Dash.css'

import AppointPatient from "./AppointPatient";
import {
  getAppointedPatient,
  // clearErrors,
} from "../actions/appointedPatientAction";
import { clearErrors, getRegisteredPatient } from '../actions/registerPatientAction'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { NavLink } from "react-router-dom";



const NewDash = () => {

  const dispatch = useDispatch();
  const history = useNavigate();

  const { appointedPatients, appointedPatientCount,resultPerPage ,  loading } =
    useSelector((state) => state.appointedPatients);
  const {registeredPatients}= useSelector((state)=>state.registeredPatients)
  const { isAuthenticated, user , error} = useSelector((state) => state.user);
  

 

  if (!isAuthenticated) {
    history("/login");
  }
  
  useEffect(() => {
    dispatch(getRegisteredPatient())
    if (error) {
      // alert.error(error)
      dispatch(clearErrors());
    }

    if (!isAuthenticated) {
      history("/login");
    }
    dispatch(getAppointedPatient( ));
  }, [dispatch,  error]);

  return (
    <>
    { user && user.type ==="doctor"?
    (
      <>
       <DoctorSidebar/>
     <div className="main-content">
     <Header/>
     <main>
     <Badge/>
     <div className="recent-grid">
     <InPatient/>
     <InDoctor/>
     </div>
     </main>
     </div>
      </>
    ):
    (
      <>
       <Sidebar/>
     <div className="main-content">
     <Header/>
     <main>
     <Badge/>
     <div className="recent-grid">
     <InPatient/>
     <InDoctor/>
     </div>
     </main>
     </div>
      </>

    )}
     
    </>
  )
}

export default NewDash