


import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


import React from "react"
import Header from './component/Header';
import Footer from './component/Footer';
import Working from "./component/Working";
import About from "./component/About"
import Services from './component/Services';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Logout from './component/Logout';
import ContactUs from './component/ContactUs';
import Appointment from './component/Appointment';
import Register from './component/Register';
import Navbar from './component/Navbar';
import { useSelector } from 'react-redux';
import { loadUser } from './actions/userAction';
import store from './store'
import PatientList from './component/Dashboard/PatientList';
import DoctorList from './component/Dashboard/DoctorList';
import VideoPresc from './component/Dashboard/VideoPresc';
import NewDash from './component/NewDash';
import Prescription from './component/Dashboard/Prescription';
import LastPresc from './component/Dashboard/LastPresc';


function App() {


  const {isAuthenticated} = useSelector(state=>state.user)

  React.useEffect(()=>{
    
  
    store.dispatch(loadUser())
  },[])

  // window.addEventListener("contextmenu", (e) => e.preventDefault())

  return (
   <Router>
    {/* <Navbar/> */}
   <Routes>
   <Route exact path='/' element={<Header/>}/>
   <Route exact path='/working' element={<Working/>}/>
   <Route path='/services' element={<Services/>}/>
   <Route exact path='/login' element={<Login/>}/>
   {/* <Route exact path='/register' element={<SignUp/>}/> */}
   <Route exact path='/dash' element={<NewDash/>}/>
   <Route exact path='/logout' element={<Logout/>}/>
   <Route exact path="/contact" element={<ContactUs/>}/>
   <Route exact path="/dash/appointment" element={<Appointment/>}/>
   <Route exact path="/dash/register" element={<Register/>}/>





<Route exact path="/dash/presc" element={<VideoPresc/>}/>


   <Route exact path='/dash/doctorList' element={<DoctorList/>} />
   <Route exact path='/dash/patientList' element={<PatientList/>} />


   <Route exact path='/presc' element={<Prescription/>} />
   <Route exact path='/dash/presc/patient' element={<LastPresc/>} />
      
    </Routes>

    {/* <Footer/> */}
   </Router>
  );
}

export default App;
