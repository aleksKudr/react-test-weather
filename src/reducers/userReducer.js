import {
  SIGN_IN, SIGN_OUT, CREATE_USER
} from '../actions/types';

const INITIAL_STATE = {
  username: null,
  password: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SIGN_IN:
    // console.log('action.payload.username', action.payload)
    return {
      ...state,
      username: action.payload.username,
      password: action.payload.password
    };
  case CREATE_USER:
    return {
      ...state,
      username: action.payload.username,
      password: action.payload.password
    };
  case SIGN_OUT:
    return { ...state,
      username: '',
      password: '' };
  default:
    return state;
  }
};
