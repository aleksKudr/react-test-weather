// import _ from 'lodash';
import {
  FETCH_WEATHER,
  CREATE_WEATHER
} from '../actions/types';

const INITIAL_STATE = {
  code: null,
  list: [],
  city: [],
  cnt: null,
  message: null,
  createdAT: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_WEATHER:
    // console.log('act', action.payload.data)
    return {
      ...state,
      code: action.payload.data.code,
      list: action.payload.data.list,
      city: action.payload.data.city,
      cnt: action.payload.data.cnt,
      message: action.payload.data.message
    };
  case CREATE_WEATHER:
    return {
      ...state,
      createdAT: action.payload.data.createdAt
    };
  default:
    return state;
  }
};
