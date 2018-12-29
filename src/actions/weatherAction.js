// import streams from '../apis/streams';
// import history from '../history';
import axios from 'axios';
import { instance } from '../utils/axios';
import {
  FETCH_WEATHER,
  CREATE_WEATHER
} from './types';

export const createHistory = data => async (dispatch) => {
  console.log('data', data);
  const response = await instance.post('/history', {
    data
  });
  console.log('response1', response);
  dispatch({ type: CREATE_WEATHER,
    payload: response });
};

export const getWeather = formValues => async (dispatch) => {
  const KEY = '36e48c55215089bf93e20c56ac459509';
  // console.log(formValues)
  const response = await axios.get('http://api.openweathermap.org/data/2.5/forecast', {
    params: {
      apiKey: KEY,
      q: formValues.city
    }
  });
  console.log('response', JSON.stringify(response));

  dispatch({ type: FETCH_WEATHER,
    payload: response });
};
