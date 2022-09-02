import React, { useState, useContext, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, contactUs } from "../actions/contactAction";

import "./ContactUs.css";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  const dispatch = useDispatch();

  const { error, loading } = useSelector((state) => state.contact);
  const alert = useAlert();

  const history = useNavigate();

  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: "",
    department: "",
    message: "",
  });

  const { fname, lname, email, department, message } = contact;

  const contactSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("fname", fname);
    myForm.set("lname", lname);
    myForm.set("email", email);
    myForm.set("department", department);
    myForm.set("message", message);
    dispatch(contactUs(myForm));
  };

  const registerDataChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    } else {
      setContact({
        // ...contact,
        fname: "",
        lname: "",
        email: "",
        department: "",
        message: "",
        }
      );
      if(!loading){
        history("/contact")
        // alert.success("sent")
        
      }
    }
  }, [dispatch, loading, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        <Navbar/>
          <div
            className="max-w-full max-h-fit bg-service bg-no-repeat ym-8"
            id="page-banner"
          >
            <p className="text-center pt-32 pb-12 text-5xl font-bold text-orange-500 bg-text-bgy bg-no-repeat bg-center">
              Contact-Us
            </p>
            </div>
          {/* <img src={shape4} className="-mt-5" alt="" /> */}

          <div className="max-w-max p-4 bg-white rounded-lg border border-gray-200 shadow-md my flex justify-center items-center mx-auto">
            <div>
              <form method="POST" className="w-full" onSubmit={contactSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      onChange={registerDataChange}
                      value={fname}
                      name="fname"
                      className="appearance-none block w-full bg-purple-50 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                      required
                    />
                    <p className="text-red-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                    required
                      onChange={registerDataChange}
                      value={lname}
                      name="lname"
                      className="appearance-none block w-full bg-purple-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Email Address
                    </label>
                    <input
                      onChange={registerDataChange}
                      value={email}
                      required
                      name="email"
                      className="appearance-none block w-full bg-purple-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="email"
                      placeholder="********@*****.**"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Select Department
      <select  name="department" onChange={registerDataChange} value={user.department} className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-1/2 h-10 my-3'>
        <option className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-1/2 h-10 my-3' name="department" onChange={registerDataChange} value={user.department}>Manager</option>
        <option className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-1/2 h-10 my-3' name="department" onChange={registerDataChange} value={user.department}>Doctor</option>
        <option className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-1/2 h-10 my-3' name="department" onChange={registerDataChange} value={user.department}>Patient</option>
      </select>
      </label> */}

                    <div className="w-full md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                      >
                        Department
                      </label>
                      <input
                        onChange={registerDataChange}
                        value={department}
                        required
                        name="department"
                        className="appearance-none block w-full bg-purple-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email"
                        type="text"
                        placeholder="Doctor"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Your Message
                    </label>
                    <textarea
                    required
                      onChange={registerDataChange}
                      value={message}
                      name="message"
                      rows="10"
                      className="appearance-none block w-full bg-purple-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    ></textarea>
                  </div>
                  <div className="flex justify-between w-full px-3">
                    <div className="md:flex md:items-center">
                      <label className="block text-gray-500 font-bold">
                        <input className="mr-2 leading-tight" type="checkbox" />
                        <span className="text-sm">
                          Send me your newsletter!
                        </span>
                      </label>
                    </div>
                    <button
                      value="Contact"
                      className="shadow bg-orange-600 hover:bg-white hover:text-orange-600 focus:shadow-outline focus:outline-none text-white font-normal py-2 px-3 rounded"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* <div className=' mx-10 bg-contact bg-no-repeat bg-center bg-cover bg-'>
  <h4 className="title mb-30">Contact Us For Any Informations</h4>
  <div className="icon-box">
										<h6 className="title"><i className="ti-map-alt"></i>Location</h6>		
										<p>KLIC-LNCT,incubation center,Bhopal-462022,MP</p>
		</div>
    <div className="icon-box">
										<h6 className="title"><i className="ti-id-badge"></i>Email &amp; Phone</h6>		
										<a href="javascript:void(0);" className="text-white">help.aarogyam@gmail.com</a>
										<p>(+91) 6265789154</p>
									</div>
    <div className="icon-box">
										<h6 className="title"><i className="ti-world"></i>Follow Us</h6>
										<ul className="social-media">
											<li><a target="_blank" href="#"><i className="fab fa-twitter"></i></a></li>
											<li><a target="_blank" href="#"><i className="fab fa-linkedin"></i></a></li>
											<li><a target="_blank" href="#"><i className="fab fa-instagram"></i></a></li>
										</ul>
									</div>
  </div> */}
          </div>
          {/* <Fotter/> */}
          <Footer/>
        </>
      )}
    </>
  );
};

export default ContactUs;
