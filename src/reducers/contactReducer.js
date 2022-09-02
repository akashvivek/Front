import {
  CONTACT_REQUEST,
  CONTACT_SUCCESS,
  CONTACT_FAIL,
  CLEAR_ERRORS,
} from "../constants/contactConstant";

export const contactReducer = (state = { contact: {} }, action) => {
  switch (action.type) {
    case CONTACT_REQUEST:
      return {
        loading: true,
        
      };
    case CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contact: action.payload,
      };

    case CONTACT_FAIL:
      return {
        ...state,
        loading: false,
        contact: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
