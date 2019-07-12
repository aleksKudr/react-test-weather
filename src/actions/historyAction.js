import { instance } from '../utils/axios';
import { FETCH_HISTORY } from './types';

export const getHistory = () => async (dispatch) => {
  const response = await instance.get('/history');
  dispatch(
    {
      type: FETCH_HISTORY,
      payload: response
    }
  );
};

export default getHistory;
