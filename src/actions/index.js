import * as types from './types';
import { addTimeout, removeTimeout, WATCH_ALL } from 'redux-timeout'

const TIME_OUT = 30000; //30 seconds

//Thunks
export const doLogin = (name) => (dispatch, getState) => {
  dispatch(addTimeout(TIME_OUT, WATCH_ALL, () => {
    alert('The session has expired');
    dispatch(doLogout());
  }));
  dispatch(login(name));
}

export const doLogout = () => (dispatch, getState) => {
  dispatch(removeTimeout(WATCH_ALL));
  dispatch(logout());
}

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