import * as types from './types';

//Action Creators
export const login = (name) => {
  return { 
    type: types.LOGIN_DUMMY, 
    payload: { name }
  }
};

export const logout = () => {
  return { 
    type: types.LOGOUT_DUMMY
  }
};