import * as types from '../actions/types';

export const initialState = {
  loggedUserName: '',
  errorMessage: ''
};

export default function repos(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_DUMMY:
      return {
        ...state,
        loggedUserName: action.payload.name
      }
    case types.LOGOUT_DUMMY: 
      return {
        ...state,
        loggedUserName: ''
      }
    default:
      return state;
  }
}