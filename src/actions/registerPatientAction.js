import axios from "axios";

import {
  GET_ALL_REGISTER_PATIENT_REQUEST,
  GET_ALL_REGISTER_PATIENT_SUCCESS,
  GET_ALL_REGISTER_PATIENT_FAIL,
  REGISTER_PATIENT_REQUEST,
  REGISTER_PATIENT_SUCCESS,
  REGISTER_PATIENT_FAIL,
  CLEAR_ERRORS,
} from "../constants/registerPatientConstant";

export const getRegisteredPatient = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_REGISTER_PATIENT_REQUEST,
    });

    let link = `/api/dash/register`;

    
    const { data } = await axios.get(link);

    dispatch({
      type: GET_ALL_REGISTER_PATIENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_REGISTER_PATIENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// New REgistartion
export const registration = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_PATIENT_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/dash/register`,
      userData,
      config
    );

    dispatch({ type: REGISTER_PATIENT_SUCCESS, payload: data.newPatient });
  } catch (error) {
    dispatch({
      type: REGISTER_PATIENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// CLearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
