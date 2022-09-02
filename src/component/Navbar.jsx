import React, {useState, useContext, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, NavLink} from 'react-router-dom'

import { clearErrors, loadUser } from '../actions/userAction';
import { useAlert } from 'react-alert';



const Navbar = () => {
    
    const dispatch = useDispatch()
    const alert = useAlert()
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    
    const {isAuthenticated,loading , error} = useSelector((state)=>state.user)

    const Log =()=>{
        if(isAuthenticated){
            if(!loading){
                return(
                    <>
                <NavLink to='/logout' className='text-black'>Logout</NavLink>
                </>
                )
            }
            // else{
            //     return(
            //         <>
            //     <NavLink to='/login'>Login</NavLink>
            //     </>)
            // }
        }
        else{
            return(
                <>
            <NavLink to='/login' className='text-black'>Login</NavLink>
         </>)
        }
    }

    useEffect(() => {
        if (error) {
          dispatch(clearErrors());
        }
        // dispatch(loadUser())
        
      }, [dispatch, error,  isAuthenticated]);


      
      
 
          return(
            <div className=' max-w-full h-[80px] z-10 drop-shadow-lg  top-0'>
            <div className="flex px-8 items-center w-full h-full justify-around sticky top-0">
                   
                    <img class="w-60 mx-7 mb-0" src="https://myaarogyam.com/images/newfulllogo.png" alt="" />
                <div className="flex items-center ">
                    <ul className="hidden md:flex space-x-8 items-center">
                        <li className='cursor-pointer hover:text-orange-400'><Link to='/' className='text-black'>Home</Link></li>
                        <li className='cursor-pointer hover:text-orange-400'><Log/></li>
                        <li className='cursor-pointer hover:text-orange-400 '><Link to='/Services' className='text-black'>Services</Link></li>
                        <li className='cursor-pointer hover:text-orange-400 '><Link to='https://www.sgu.edu/blog/medical/top-medical-blogs/' className='text-black'>Blogs</Link></li>
                        <button className='px-4 text-sm py-2 bg-orange-500 rounded-xl hover:text-orange-400 hover:bg-white'><Link to='/Contact' className='text-black'>Contact Us</Link></button>
                    </ul>
                </div>
              
            </div>
            
        </div>


)
}


export default Navbar