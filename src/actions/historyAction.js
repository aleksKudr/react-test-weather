// import axios from 'axios';
import { instance } from '../utils/axios';
import {
    FETCH_HISTORY
} from './types';
 
export const getHistory = () => async dispatch => {
    const response = await instance.get(`/history`);
    // console.log('response2', response);
    dispatch({ type: FETCH_HISTORY, payload: response});
    // return true;
}