import {
    CONTACT_REQUEST,
    CONTACT_SUCCESS,
    CONTACT_FAIL,
    CLEAR_ERRORS,
  } from "../constants/contactConstant";


  import axios from "axios";


///COntact US SEction

export const contactUs = (userData) => async (dispatch) => {
    try {
      dispatch({ type: CONTACT_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(`/api/contact`, userData, config);
  
      dispatch({ type: CONTACT_SUCCESS, payload: data.contact });
    } catch (error) {
      dispatch({
        type: CONTACT_FAIL,
        payload: error.response.data.message,
      });
    }
  };


   // Clearing Errors
   export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  