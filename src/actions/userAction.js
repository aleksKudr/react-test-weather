// import streams from '../apis/streams';
// import history from '../history';
import { instance } from '../utils/axios';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_USER
} from './types';
import { setToken } from '../utils/functions';

export const regist = formValues => async (dispatch, getState) => {
  const response = await instance.post('/regist', {
    username: formValues.username,
    password: formValues.password
  });
  setToken(response.data.token);

  dispatch({ type: CREATE_USER,
    payload: formValues });
};

export const login = formValues => async (dispatch) => {
  console.log('formValues', JSON.stringify(formValues));
  const response = await instance.post('login', {
    username: formValues.username,
    password: formValues.password
  });


  setToken(response.data.token);
  console.log(formValues);
  //   console.log('response', JSON.stringify(response));
  dispatch({ type: SIGN_IN,
    payload: formValues });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: SIGN_OUT });
};
