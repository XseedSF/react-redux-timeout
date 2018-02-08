import { addTimeout, removeTimeout, WATCH_ALL } from 'redux-timeout';
import * as types from './types';

const TIME_OUT = 30000; // 30 seconds

// Thunks
export const doLogin = name => (dispatch) => {
  dispatch(addTimeout(TIME_OUT, WATCH_ALL, () => {
    alert('The session has expired');
    dispatch(doLogout());
  }));
  dispatch(login(name));
};

export const doLogout = () => (dispatch) => {
  dispatch(removeTimeout(WATCH_ALL));
  dispatch(logout());
};

// Action Creators
const login = name => ({
  type: types.LOGIN_DUMMY,
  payload: { name },
});

const logout = () => ({
  type: types.LOGOUT_DUMMY,
});

export const dummyAction = () => (dispatch) => {
  dispatch({
    type: types.DUMMY_ACTION,
  });
};
