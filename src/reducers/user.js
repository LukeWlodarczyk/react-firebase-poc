import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/types';

const initialState = {
  user: null,
  auth: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: true,
        user: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        auth: false,
        user: null,
      };

    default:
      return state;
  }
};
