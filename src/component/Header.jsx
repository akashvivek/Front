import React,{useEffect} from 'react'
import doctor from "../assets/main-banner/doctor.png"
import circle from "../assets/shap/chicle-blue-2.png"
import triangle from "../assets/shap/trangle-orange.png"
import square from "../assets/shap/square-blue.png"
import plus from "../assets/shap/plus-orange.png"
import wave from "../assets/shap/wave-orange.png"
import "./Header.css"
import About from "../component/About"
import Working from "../component/Working"
import {useSelector, useDispatch} from "react-redux"
import { clearErrors} from '../actions/userAction'
import Loader from './Loader'
import { useAlert } from "react-alert";
import Navbar from './Navbar'
import Footer from './Footer'



const Header = () => {
 
    const dispatch = useDispatch()

    const {loading, error} = useSelector((state)=>state.user)

    const alert = useAlert()



   
    useEffect(() => {
        if(error){
            alert.error(error)
            dispatch(clearErrors())
          }
         
        }, [dispatch, alert, error])
    


  return (
          <>
          
          {loading ? (<Loader/>) :
          ( 
         
          <>
          <Navbar/>
          <div className=" w-fit flex flex-col flex-wrap justify-between bg-designer bg-center bg-no-repeat bg-cover sm:w-full mx-auto my-0 overflow-x-hidden" id='main-banner'>
          <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
              <div className='flex flex-col justify-center md:item-start w-full px-2 py-8 z-20'>
                  <p className='text-base font-bold mt-2 m-9 bg-text-bg bg-center bg-repeat text-blue-700 w-72 mx-auto sm:text-xl sm:min-w-max sm:mx-auto md:text-xl md:min-w-max lg:min-w-max md:ml-8'>We are One-Health care Solution</p>
                  <p className='text-2xl lg:text-5xl sm:text-4xl font-bold text-blue-900 mx-auto w-4/5 sm:w-9/12 md:w-[100%] leading-tight tracking-wider lg:leading-snug'>Making healthcare hasssle-free and secure, like never before.</p>
                  
              </div>
              <div className='z-20'>
                  <img src={doctor} className="max-w-full h-auto md:w-4/5 mx-auto relative resize-y z-10" alt="/" />
              </div>
          </div>
                  {/* <img src={shape1} className="absolute top-[103%] sm:top-[98%] lg:top-[89%] xl:top-[83%]" alt="/" /> */}
      </div>
      <img src={circle} className="left  z-0" alt="/" />
      <img src={triangle} className="absolute top-[88%] left-[10%] animate-bounce z-0" id='triangle' alt="/" />
      <img src={square} className="absolute top-[30%] left-[45%] animate-pulse z-10" id='square' alt="/" />
      <img src={plus} className="absolute top-[80%] left-[45%] animate-ping z-10" id='plus' alt="/" />
      <img src={wave} className="rights z-10" id='wave' alt="/" />

      <About/>
      <Working/>
      <Footer/>
      
     

      </>)}
          
      
     

      </>
  )
}

export default Header 